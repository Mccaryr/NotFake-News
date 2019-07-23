$(function (){
    console.log('posts.js is loaded...')
    listenForClick()
});

function listenForClick(){
    $('#news_posts').on('click', function(event) {
        event.preventDefault()
        getPosts()
    })
}

function getPosts(){
    $.ajax({
        url: '/posts.json',
		method: 'get',
		dataType: 'json',
		success: function (data) {
			console.log("the data is: ", data)
			data.map(post => {
				const newPost = new Post(post)
				const newPostHtml = newPost.postHTML()
				document.getElementById('ajax-posts').innerHTML += newPostHtml
			})
		}
	})
}

class Post {
    constructor(obj) {
        this.id = obj.id 
        this.title = obj.title
		this.info = obj.info 
		this.comments = obj.comments
    }
}

Post.prototype.postHTML = function () {
let postComments = this.comments.map(comment => {
    return (`
    <p>${comment.content}</p>
    `)
}).join('')

return (`	
    <div class='post'>
        <a href='/posts/${this.id}' <h2>${this.title}</h2></a>
        <p>${this.info}</p>
    </div>
`)
}














// $(() => {
//     bindClickHandlers()
// })

// const bindClickHandlers = () => {
//     $('#news_posts').on('click', (e) => {
//         e.preventDefault()
//         console.log("yay!")
//         fetch(`https://0.0.0.0:3000/posts.json`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//     })
// }