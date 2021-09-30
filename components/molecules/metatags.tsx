import Head from 'next/head'

import { ogData } from '../../data/og-data'

const MetaTags = () => {
  const { type, title, description, image } = ogData

  return (
    <Head>
      <title>{title}</title>

      <meta name="viewport" content="width=device-width,user-scalable=no" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Maykell Carrillo" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://maykell.dev" />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1349" />
      <meta property="og:image:height" content="852" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:site_name" content="Maykell Carrillo" />

      <link rel="canonical" href="https://maykell.dev" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Poppins:wght@600&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

export default MetaTags
