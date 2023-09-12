import { join, posix, sep } from "node:path"
import {
	removeLeadingSep,
	removeTrailingSep,
	writeNestedFile,
} from "$lib/filesystem"
import { PACKAGE_NAME } from "$src/constants"

export function generatePageProxy(
	pagesDirectory: string,
	pagePath: string,
	proxyPath: string,
	importGetStaticPaths: boolean,
	exportPrerender: boolean,
	langCode: string,
) {
	const depth = Math.max(
		0,
		removeLeadingSep(removeTrailingSep(proxyPath)).split(sep).length - 1,
	)
	const importPath = `"${posix.join(
		"../".repeat(depth),
		pagePath.replaceAll("\\", "/"),
	)}"\n`

	let pageProxy = `---\nimport Page from ${importPath}`
	if (importGetStaticPaths) {
		pageProxy += getStaticPaths(importPath, langCode)
	}
	if (exportPrerender) {
		pageProxy += "export const prerender = true\n\n"
	}

	pageProxy += "const { props } = Astro\n---\n\n<Page {...props} />"

	writeNestedFile(join(pagesDirectory, proxyPath), pageProxy)
}

function getStaticPaths(importPath: string, langCode: string) {
	return `import { getStaticPaths as proxyGetStaticPaths } from ${importPath}import { extractRouteLangCode } from "${PACKAGE_NAME}"\n\n/* @ts-ignore */\nexport const getStaticPaths = (props) => proxyGetStaticPaths({\n\t...props,\n\tlangCode: "${langCode}",\n})\n\n`
}
