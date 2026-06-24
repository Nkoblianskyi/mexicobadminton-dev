import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { blogPosts } from '@/lib/blog-data'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog de Bádminton',
  description:
    'Artículos sobre técnica, táctica, entrenamiento físico, equipamiento y la cultura del bádminton en México.',
}

const categoryColors: Record<string, string> = {
  Técnica: 'var(--primary)',
  Táctica: 'var(--accent)',
  Entrenamiento: 'var(--gold)',
  Mental: 'oklch(0.55 0.14 270)',
  Equipamiento: 'oklch(0.50 0.12 200)',
  Cultura: 'oklch(0.52 0.14 155)',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <SiteHeader />

      <main className="pt-16">
        {/* Page Header */}
        <section
          className="py-20 clip-diagonal"
          style={{ background: 'var(--foreground)' }}
        >
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-8">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
              style={{ color: 'var(--gold)' }}
            >
              Artículos y contenidos
            </p>
            <h1
              className="font-heading text-[clamp(3.5rem,9vw,8rem)] leading-none text-balance"
              style={{ color: 'var(--background)' }}
            >
              BLOG
              <br />
              <span style={{ color: 'oklch(0.62 0.18 34)' }}>BÁDMINTON</span>
            </h1>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Featured Post */}
          <article className="mb-16 group" aria-label={`Artículo destacado: ${featured.title}`}>
            <Link href={`/blog/${featured.slug}`} className="block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
                <div className="relative h-72 lg:h-auto min-h-72">
                  <Image
                    src={featured.img}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className="p-10 flex flex-col justify-center"
                  style={{ background: 'var(--card)' }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-background"
                      style={{ background: categoryColors[featured.category] ?? 'var(--primary)' }}
                    >
                      {featured.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{featured.readTime} de lectura</span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-4 text-balance group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-6">{featured.excerpt}</p>
                  <span
                    className="self-start inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: 'var(--primary)' }}
                  >
                    Leer artículo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </article>

          {/* Rest of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <article key={post.slug} className="group flex flex-col rounded-2xl overflow-hidden border border-border hover:border-primary transition-colors">
                <Link href={`/blog/${post.slug}`} className="flex flex-col flex-1">
                  <div className="relative h-52">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
                    <span
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase text-background"
                      style={{ background: categoryColors[post.category] ?? 'var(--primary)' }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-xs text-muted-foreground mb-3">{post.readTime} de lectura</p>
                    <h2 className="font-heading text-2xl leading-tight mb-3 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-muted-foreground flex-1">{post.excerpt}</p>
                    <span
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold"
                      style={{ color: 'var(--primary)' }}
                    >
                      Leer <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
