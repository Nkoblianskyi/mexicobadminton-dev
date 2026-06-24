import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { blogPosts, getPostBySlug } from '@/lib/blog-data'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

const categoryColors: Record<string, string> = {
  Técnica: 'var(--primary)',
  Táctica: 'var(--accent)',
  Entrenamiento: 'var(--gold)',
  Mental: 'oklch(0.55 0.14 270)',
  Equipamiento: 'oklch(0.50 0.12 200)',
  Cultura: 'oklch(0.52 0.14 155)',
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
          <Image
            src={post.img}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/65" />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2"
            style={{ background: 'linear-gradient(to top, var(--background), transparent)' }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 pb-14 w-full">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-background"
                style={{ background: categoryColors[post.category] ?? 'var(--primary)' }}
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'oklch(0.98 0.005 100 / 70%)' }}>
                <Clock size={12} />
                {post.readTime} de lectura
              </span>
            </div>
            <h1
              className="font-heading text-[clamp(2.2rem,6vw,5rem)] leading-tight text-balance"
              style={{ color: 'var(--background)' }}
            >
              {post.title}
            </h1>
          </div>
        </section>

        {/* Article content */}
        <article className="max-w-3xl mx-auto px-6 py-16" aria-label={post.title}>
          <p className="text-lg leading-relaxed text-muted-foreground mb-10 font-medium border-l-4 pl-5" style={{ borderColor: 'var(--primary)' }}>
            {post.excerpt}
          </p>

          <div className="flex flex-col gap-6">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Nav between articles */}
        <nav
          className="max-w-3xl mx-auto px-6 pb-20 flex flex-col sm:flex-row gap-4 justify-between"
          aria-label="Artículos anterior y siguiente"
        >
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group flex-1 p-5 rounded-xl border border-border hover:border-primary transition-colors flex items-start gap-3"
            >
              <ArrowLeft size={18} className="flex-shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">Anterior</p>
                <p className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">{prevPost.title}</p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex-1 p-5 rounded-xl border border-border hover:border-primary transition-colors flex items-end gap-3 flex-col sm:flex-row sm:items-start sm:justify-end text-right"
            >
              <div>
                <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">Siguiente</p>
                <p className="text-sm font-semibold leading-tight group-hover:text-primary transition-colors">{nextPost.title}</p>
              </div>
              <ArrowRight size={18} className="flex-shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </nav>

        {/* Back to blog */}
        <div className="max-w-3xl mx-auto px-6 pb-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={15} />
            Ver todos los artículos
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
