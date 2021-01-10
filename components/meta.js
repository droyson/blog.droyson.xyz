import React from 'react'
import Head from 'next/head'

export default function Meta () {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Royson D'Silva" />
      <meta name="description" content="A mostly programming blog by Royson D'Silva" />
      <meta name="keywords" content="royson, d'silva, droyson, blog, programming, css, html, javascript"></meta>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://use.typekit.net/ned0lzy.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8/normalize.css" />
    </Head>
  )
}
