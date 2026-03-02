import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { cn } from '@/lib/utils'

// ---------------------------------------------------------------------------
// Custom MDX components
// ---------------------------------------------------------------------------

const mdxComponents = {
  table: (props: React.ComponentProps<'table'>) => (
    <div className="my-6 w-full overflow-x-auto">
      <table
        className="w-full border-collapse text-sm"
        {...props}
      />
    </div>
  ),
  thead: (props: React.ComponentProps<'thead'>) => (
    <thead className="bg-muted/50" {...props} />
  ),
  th: (props: React.ComponentProps<'th'>) => (
    <th
      className="border border-border px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: React.ComponentProps<'td'>) => (
    <td className="border border-border px-4 py-2" {...props} />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre
      className="overflow-x-auto rounded-lg border bg-muted p-4 text-sm"
      {...props}
    />
  ),
  code: ({
    className,
    children,
    ...props
  }: React.ComponentProps<'code'>) => {
    // Inline code (no className means not inside a pre block from a fenced block)
    const isBlock = className?.startsWith('language-')
    if (isBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
    return (
      <code
        className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono"
        {...props}
      >
        {children}
      </code>
    )
  },
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote
      className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 pl-4 py-2 my-4 [&>p]:my-1"
      {...props}
    />
  ),
  a: (props: React.ComponentProps<'a'>) => (
    <a
      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2"
      {...props}
    />
  ),
}

// ---------------------------------------------------------------------------
// MarkdownRenderer
// ---------------------------------------------------------------------------

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div
      className={cn(
        'prose prose-slate dark:prose-invert max-w-none',
        // Fine-tune prose defaults
        'prose-headings:scroll-mt-20',
        'prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4',
        'prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3',
        'prose-p:leading-7',
        'prose-li:leading-7',
        'prose-img:rounded-lg',
        className,
      )}
    >
      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: 'wrap',
                  properties: {
                    className: ['anchor-link'],
                  },
                },
              ],
            ],
          },
        }}
      />
    </div>
  )
}
