import Head from 'next/head'
import React, { useEffect } from 'react'

export default function Analytics () {

  useEffect(function initGA () {
    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', 'G-TCQNP590YK')
  }, [])

  useEffect(function initCleverTap () {
    window.clevertap = { event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: [] }
    window.clevertap.account.push({ 'id': 'WW8-448-RW6Z' })
    const ctScript = document.createElement('script')
    ctScript.type = 'text/javascript'
    ctScript.async = true
    ctScript.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/a.js?v=0'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(ctScript, s)
  }, [])

  return (
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-TCQNP590YK"></script>
    </Head>
  )
}
