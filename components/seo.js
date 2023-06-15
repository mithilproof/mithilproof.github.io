import Head from "next/head"

export default function SEO({
  title = "Mithil Verma",
  og = "og.png",
  description = "Mithil Verma is a software engineer and designer who creates human-centered design solutions.",
}) {
  const siteTitle = "Mithil Verma"

  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Mithil Verma" />
      <meta
        property="og:image"
        content={`../images/meta1/${og}`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="twitter:image"
        content={`../images/meta/${og}`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="mithilproof" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <link
        href="../images/meta/apple-touch-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="../images/meta/apple-touch-icon-152x152.png"
        rel="apple-touch-icon"
        sizes="152x152"
      />
      <link
        href="../images/meta/apple-touch-icon-120x120.png"
        rel="apple-touch-icon"
        sizes="120x120"
      />

      <link
        href="../images/meta/apple-touch-icon-76x76.png"
        rel="apple-touch-icon"
        sizes="76x76"
      />
      <link
        rel="apple-touch-icon"
        href="../images/meta/apple-touch-icon-60x60.png"
      />
      <link
        href="../images/meta/apple-touch-icon-120x120.png"
        sizes="60x60"
        rel="apple-touch-icon"
        sizes="120x120"
      />
      <link
        href="../images/meta/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="../images/meta/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="../images/meta/favicon-48x48.png"
        rel="icon"
        sizes="48x48"
        type="image/png"
      />

      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for nelson.co"
        href="/feed.xml"
      />
    </Head>
  )
}
