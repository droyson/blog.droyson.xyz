import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/article.module.scss'

export default function Article ({ id, title, children }) {

  return (
    <article id={id} className={styles.article}>
      <h3>{title}</h3>
      {children}
    </article>
  )
}

Article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
}
