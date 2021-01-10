import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Header from '../components/header'
import Article from '../components/article'
import posts from '../_posts/postsData.json'
import fs from 'fs'
import path from 'path'

function HomePage({ postList }) {
  return (
    <>
      <Header></Header>
      <main>
        {postList.map(p => (
          <Article key={p.id} id={p.id} title={p.title}>
            <section>
              <p>{p.content}</p>
              <Link href={`/posts/${p.id}`}>
                <a>
                  Read the full post
                </a>
              </Link>
            </section>
          </Article>
        ))}
      </main>
    </>
  )
}

HomePage.propTypes = {
  postList: PropTypes.array
}

export async function getStaticProps () {
  const postList = posts.sort((a, b) => b.publishedTs - a.publishedTs).map(p => {
    const title = p.title
    const filePath = `_posts/${p.id}/content.html`
    let content = fs.readFileSync(path.join(process.cwd(), filePath), 'utf8')
    // strip content of html tags and get the first 100 chars
    content = content.replace(/\n/g, ' ').replace(/<(.*?)>/g, '').substring(0, 100).trim().concat('...')

    return {
      title,
      content,
      id: p.id
    }
  })

  return {
    props: {
      postList
    }
  }
}

export default HomePage