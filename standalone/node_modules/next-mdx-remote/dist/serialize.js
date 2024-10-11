/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { compile } from '@mdx-js/mdx';
import { VFile } from 'vfile';
import { matter } from 'vfile-matter';
import { createFormattedMDXError } from './format-mdx-error.js';
import { removeImportsExportsPlugin } from './plugins/remove-imports-exports.js';
function getCompileOptions(mdxOptions = {}, rsc = false) {
    const areImportsEnabled = mdxOptions.useDynamicImport ?? false;
    // don't modify the original object when adding our own plugin
    // this allows code to reuse the same options object
    const remarkPlugins = [
        ...(mdxOptions.remarkPlugins || []),
        ...(areImportsEnabled ? [] : [removeImportsExportsPlugin]),
    ];
    return {
        ...mdxOptions,
        remarkPlugins,
        outputFormat: 'function-body',
        // Disable the importSource option for RSC to ensure there's no `useMDXComponents` implemented.
        providerImportSource: rsc ? undefined : '@mdx-js/react',
        development: process.env.NODE_ENV !== 'production',
    };
}
/**
 * Parses and compiles the provided MDX string. Returns a result which can be passed into <MDXRemote /> to be rendered.
 */
export async function serialize(source, { scope = {}, mdxOptions = {}, parseFrontmatter = false, } = {}, rsc = false) {
    const vfile = new VFile(source);
    // makes frontmatter available via vfile.data.matter
    if (parseFrontmatter) {
        matter(vfile, { strip: true });
    }
    let compiledMdx;
    try {
        compiledMdx = await compile(vfile, getCompileOptions(mdxOptions, rsc));
    }
    catch (error) {
        throw createFormattedMDXError(error, String(vfile));
    }
    let compiledSource = String(compiledMdx);
    return {
        compiledSource,
        frontmatter: (vfile.data.matter ?? {}),
        scope: scope,
    };
}
