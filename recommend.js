async function loadRecommends() {
    recommends = await handleRecommend()
    console.log(recommends)
    const recommend_list = document.getElementById("recommendContainer")

    recommends.forEach(recommend => {
        const newRecommend = document.createElement("div")
        newRecommend.classList.add('col')

        const chRecommend = document.createElement("div")
        chRecommend.classList.add('card', 'h-100')

        const recommendImage = document.createElement("img")
        recommendImage.classList.add('card-img-top')
        const bodyRecommend = document.createElement("div")
        bodyRecommend.classList.add('card-body')

        const bodyTitle = document.createElement("h5")
        bodyTitle.classList.add('card-title')
        const bodyContent = document.createElement("p")
        bodyContent.classList.add('card-text')

        const footerRecommend = document.createElement("div")
        footerRecommend.classList.add('card-footer')

        const footerDate = document.createElement("small")
        footerDate.classList.add('text-muted')

        recommendImage.setAttribute("src", `${recommend.store_image}`)
        newRecommend.setAttribute("id", recommend.id)
        bodyTitle.innerText = recommend.store_name
        bodyContent.innerText = recommend.store_address
        footerDate.innerText = recommend.store_rating
        footerRecommend.appendChild(footerDate)
        bodyRecommend.appendChild(bodyTitle)
        bodyRecommend.appendChild(bodyContent)
        chRecommend.appendChild(recommendImage)
        chRecommend.appendChild(bodyRecommend)
        chRecommend.appendChild(footerRecommend)
        newRecommend.setAttribute("onclick", "")
        newRecommend.appendChild(chRecommend)
        recommend_list.appendChild(newRecommend)
    });
}