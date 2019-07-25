$(function (){
    console.log('posts.js is loaded...')
    listenForClick()
    submitNewComment()
    
});




function listenForClick(){
    $('#news_posts').on('click', function(event) {
        event.preventDefault()
        history.pushState(null, null, "posts" )
        getPosts()
        getPostShow()
    })
}

function getPosts(){
    $.ajax({
        url: '/posts.json',
		method: 'get',
		dataType: 'json',
		success: function (data) {
			
			data.map(post => {
				const newPost = new Post(post)
                const newPostHtml = newPost.postHTML()
                document.getElementById('ajax-posts').innerHTML = newPostHtml
            })
            
        } 
        
    }) 

}


function submitNewComment(){
    $(document).on("submit", "#create_comment", function(e){
        e.preventDefault()
          
        
        const values = $(this).serialize()
        let id = $(this).attr('action')[7]
        $.post('/posts/'+id+'/comments', values)
        .done(function(data) {
            let newComment = new Comment(data)
            
            let htmlToAdd = newComment.createComment()  
            document.getElementById('ajax-posts').innerHTML = htmlToAdd 
        })
    })
}



function getPostShow(){
    $(document).on('click', ".show_link", function(event){
        event.preventDefault()
        let id = $(this).attr('data-id')
        console.log(id)
    $.ajax({
        url: '/posts/'+id+'.json',
		method: 'get',
		dataType: 'json',
		success: function (data) {
            
                let showPost = new Post(data)
                let postShowHtml = showPost.postShow()
                document.getElementById('ajax-posts').innerHTML = postShowHtml
			
		}
	})
})
}

function Comment(comment){
    
    this.id = comment.id 
    this.content = comment.content 
    
}

Comment.prototype.createComment = function(){
    console.log(this)
    
        return (`
            
			<p>${this.content}</p>
		`)
	
}



function Post(post) {
        this.id = post.id 
        this.title = post.title
		this.info = post.info 
		this.comments = post.comments
    }


Post.prototype.postShow = function() {
    let postComments = this.comments.map(comment => {
		return (`
            <p>${comment.content}</p>    
            <hr>
		`)
	}).join('')
    return (`
    <h3>${this.title}</h3>
    <strong>${this.info}</strong> 
    ${postComments} 
`) 
}

Post.prototype.postHTML = function () {

return (`	
        <a href='/posts/${this.id}' data-id="${this.id}" class="show_link"><h1>${this.title}</h1></a>
`)
}














// $(() => {
//     bindClickHandlers()
// })

// const bindClickHandlers = () => {
//     $('a.show_link').on('click', (e) => {
//         e.preventDefault()
//         console.log("yay!")
//         fetch(`https://0.0.0.0:3000/posts.json`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//     })
// }