import React from 'react'
import Article from '../components/article'
import Header from '../components/header'
import Link from 'next/link'

export default function About () {

  const startTs = new Date('2014-06-23').getTime()
  const todayTs = new Date().getTime()
  const yearTime = 1000 * 60 * 60 * 24 * 365
  const workExpInYears = Math.floor((todayTs - startTs) / yearTime)

  return (
    <>
      <Header hideAbout={true}></Header>
      <main>
        <Article id="about-me" title="About me">
          <p>Hey there, my name is Royson D&apos;Silva. I&apos;m a software developer with over { workExpInYears } of experience and a tinkerer, foodie, reader and at times even a writer when I&apos;m in the mood for it.</p>
          <section>
            <h4>Why did I start this blog?</h4>
            <p>Well there are 2 main reasons to this.</p>
            <ol>
              <li>For the first 6 years of my professional life I did not have a website or a tech blog to showcase my talent. So I thought to myself why not use some free time to build this.</li>
              <li>It turns out that human brain has a limited memory and remembering stuff is a difficult job. So this blog will be a journal to everything that I think is worth knowing and also a way to better my writing skills. Hopefully all this documenting stuff might come in handy for me or any other curious person in future.</li>
            </ol>
            <p>In case of any further queries feel free to drop me a mail at <a href="mailto:me.droyson@gmail.com" target="_blank" rel="noreferrer">me.droyson@gmail.com</a>.</p>
            <p>Please go ahead and read the <Link href="/">blogs</Link> and do share your valuable feedback.</p>
          </section>
        </Article>
      </main>
    </>
  )
}
