import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header'
import Article from '../../components/article'
import posts from '../../_posts/postsData.json'
import fs from 'fs'
import path from 'path'

const monthStrings = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let gistCounter = 0
async function addGist (gistSrc, placeholder) {
  const gistCallbackName = `embedGhGist${gistCounter++}`
  window[gistCallbackName] = (gist) => {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = gist.stylesheet
    placeholder.before(link)
    const div = document.createElement('div')
    div.innerHTML = gist.div
    placeholder.after(div)
    placeholder.remove()
  }
  gistSrc += `?callback=${gistCallbackName}`
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = gistSrc
  document.head.appendChild(script)
}

export default function Post ({ content, id, title, publishedTs, author }) {

  useEffect(function restoreScripts () {
    const fakeScripts = document.querySelectorAll('div[data-script]') || []
    for (const fakeScript of fakeScripts) {
      let gistSrc = ''
      const script = document.createElement('script')
      const attrs = fakeScript.attributes
      for (const attr of attrs) {
        if (attr.nodeName !== 'data-script') {
          script.setAttribute(attr.nodeName, attr.nodeValue)
        }
        if (attr.nodeName === 'src' && /https:\/\/gist.github.com\/(.*?)\.js/.test(attr.nodeValue)) {
          gistSrc = attr.nodeValue.replace(/https:\/\/gist.github.com\/(.*?)\.js/, 'https://gist.github.com/$1.json')
        }
      }
      if (gistSrc) {
        addGist(gistSrc, fakeScript)
      } else {
        fakeScript.replaceWith(script)
      }
    }
  }, [content])

  useEffect(function recordEvent () {
    const eventProperties = {
      'postId': id,
      'title': title,
      'prod': window.origin.includes('droyson.xyz')
    }

    window.clevertap && window.clevertap.event.push('Post viewed', eventProperties)
    window.gtag && window.gtag('event', 'post_viewed', eventProperties)
  }, [id])

  const postDate = new Date(publishedTs)
  const year = postDate.getFullYear()
  const date = postDate.getDate()
  const month = monthStrings[postDate.getMonth()]
  const postDateString = `${month} ${date}, ${year}`

  return (
    <>
      <Header></Header>
      <main>
        <Article id={`post-${id}`} title={title}>
          <section dangerouslySetInnerHTML={{ __html: content }}>
          </section>
          <div className="post-meta">
            Posted by <em>{author}</em> on <time dateTime={postDateString}>{postDateString}</time>
          </div>
          <style jsx>{`
            .post-meta {
              margin: 8px 0 0 0;
              text-align: end;
              font-size: 0.9rem;
              color: #4d5f73;
            }
          `}</style>
        </Article>
      </main>
    </>
  )
}

Post.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  publishedTs: PropTypes.number,
  author: PropTypes.string
}

export async function getStaticProps ({ params }) {
  const id = params.id
  const { title, publishedTs, author } = posts.find(p => p.id === id)
  const filePath = `_posts/${id}/content.html`
  const content = fs.readFileSync(path.join(process.cwd(), filePath), 'utf8').replace(/<script(.*?)>(.*?)<\/script>/g, '<div data-script $1>$2</div>')

  return {
    props: {
      id,
      title,
      content,
      publishedTs,
      author
    }
  }
}

export async function getStaticPaths () {
  const paths = posts.map(p => ({ params: { id: p.id }}))
  
  return {
    paths,
    fallback: false
  }
}
