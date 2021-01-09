import React from 'react'
import PropTypes from 'prop-types'
import Analytics from '../components/analytics'
import Meta from '../components/meta'

// import global styles
import '../styles/main.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Meta></Meta>
      <Analytics></Analytics>
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]),
  pageProps: PropTypes.object
}

export default MyApp
