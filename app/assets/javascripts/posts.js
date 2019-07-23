$(() => {
    bindClickHandlers()
})

const bindClickHandlers = () => {
    $('#news_posts').on('click', (e) => {
        e.preventDefault()
        console.log("yay!")
        fetch(`/posts.json`)
        .then(res => res.json())
    })
}