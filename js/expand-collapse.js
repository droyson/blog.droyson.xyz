document.addEventListener('DOMContentLoaded', function () {
  const expandCollapseLinks = document.querySelectorAll('.expand-collapse__link')
  
  for (const link of expandCollapseLinks) {
    link.addEventListener('click', function () {
      // Get the parent article to the clicked link
      const article = this.closest('article')
      // Identify if the card is collapsed
      const isCardCollapsed = article.classList.contains('collapsed--card')

      const eventProperties = {
        "postId": article.id,
        "prod": window.isProd
      }
      if (isCardCollapsed) {
        // expand the card if collapsed
        article.classList.remove('collapsed--card')
        this.innerText = 'Collapse'
        window.clevertap && window.clevertap.event.push('Post expanded', eventProperties)
        window.gtag && window.gtag('event', 'post_expanded', eventProperties)
      } else {
        // collapse the card if in expanded state
        article.classList.add('collapsed--card')
        this.innerText = 'Expand'
        window.clevertap && window.clevertap.event.push('Post collapsed', eventProperties)
        window.gtag && window.gtag('event', 'post_collapsed', eventProperties)
      }
    })
  }
})
