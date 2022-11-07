window.onload = async function loadDetailArticles() {
    articles = await articleDetail()
    console.log(articles)
    const article_list = document.getElementById("articles_container")

    // articles.forEach(article => {
    //     const newArticle = document.createElement("div")
    //     newArticle.classList.add('col')

    //     const chArticle = document.createElement("div")
    //     chArticle.classList.add('card', 'h-100')

    //     const articleImage = document.createElement("img")
    //     articleImage.classList.add('card-img-top')
    //     const bodyArticle = document.createElement("div")
    //     bodyArticle.classList.add('card-body')

    //     const bodyTitle = document.createElement("h5")
    //     bodyTitle.classList.add('card-title')
    //     const bodyContent = document.createElement("p")
    //     bodyContent.classList.add('card-text')

    //     const footerArticle = document.createElement("div")
    //     footerArticle.classList.add('card-footer')

    //     const footerDate = document.createElement("small")
    //     footerDate.classList.add('text-muted')

    //     articleImage.setAttribute("src", `${backend_base_url}${article.post_image}`)
    //     newArticle.setAttribute("id", article.id)
    //     bodyTitle.innerText = article.post_title
    //     bodyContent.innerText = article.post_restaurant
    //     footerDate.innerText = article.post_created
    //     footerArticle.appendChild(footerDate)
    //     bodyArticle.appendChild(bodyTitle)
    //     bodyArticle.appendChild(bodyContent)
    //     chArticle.appendChild(articleImage)
    //     chArticle.appendChild(bodyArticle)
    //     chArticle.appendChild(footerArticle)
    //     newArticle.setAttribute("onclick", "articleDetail(this.id)")
    //     newArticle.appendChild(chArticle)
    //     article_list.appendChild(newArticle)
    // });
}