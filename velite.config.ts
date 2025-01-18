import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';
import { defineCollection, defineConfig, s } from 'velite';

import { LOCALE_ARRAY } from '@/constants/globals';
import { LocaleKey } from '@/types/globals.type';

const computedFields = <T extends { slug: string; locale: LocaleKey }>(
  data: T,
) => {
  const slugItem = data.slug.split('/').filter((i) => i !== data.locale);

  const permalink = `/ebooks/${slugItem.join('/')}`;
  const prevLink = `/ebooks/${slugItem.slice(0, -1).join('/')}`;

  return {
    ...data,
    permalink,
    prevLink,
  };
};

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.
const ebooks = defineCollection({
  name: 'Ebook',
  pattern: 'ebooks/**/*.mdx',
  schema: s
    .object({
      locale: s.enum(LOCALE_ARRAY).default('en'),
      slug: s.string(),
      title: s.string().max(99),
      section: s.string().max(99).optional(),
      chapter: s.string().max(99).optional(),
      description: s.string().max(199).optional(),
      author: s.string().max(99),
      date: s.isodate(),
      published: s.boolean().default(true),
      content: s.mdx(),
      toc: s.toc(),
      cover: s.string().max(99),
      type: s.enum(['parent', 'child']).default('child'),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: {
    ebooks,
  },
  mdx: {
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;

            if (codeEl.tagName !== 'code') return;

            node.__rawstring__ = codeEl.children?.[0].value;
          }
        });
      },
      rehypeSlug as any,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: false,
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'figure') {
            if (!('data-rehype-pretty-code-figure' in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== 'pre') {
              return;
            }

            preElement.properties['__rawstring__'] = node.__rawstring__;
          }
        });
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
      rehypeHighlight,
    ],
    remarkPlugins: [],
  },
});
