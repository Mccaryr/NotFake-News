$(function(){
    $("a.load_comments").on("click", function(e){
        $.ajax({
            url: this.href,
            method: 'GET',
            dataType: 'json'
        }).done(function(data) {
            console.log(data)
    })
    e.preventDefault();
})
})

// function listenForClick(){
//     $('button#posts-data').on('click', function(event) {
//         event.preventDefault()
//         getPosts()
//     })
// }



// function getPosts(){
//     $.ajax({
//         url: this.href,
//         method: 'get',
//         dataType: 'json'
//     }).done(function(data) {
//         console.log("the data is: ", data)
//         let mypost = new Post(data[0])
//         let myPostHTML = mypost.postHTML()
//         document.getElementById('ajax-posts').innerHTML += myPostHTML 
//     })
// }

// class Post {
//     constructor(obj) {
//         this.id = obj.id 
//         this.title = obj.title
//         this.info = obj.info 
//         this.comments = obj.comments 
//     }
// }


// Post.prototype.postHTML = function() {

//     let postComments = this.comments.map(comment => {
//         return(`
//             <p>${comment.content}</p> 
//         `)
//     }).join('')
//     return (`
//     <div>
//         <h2>${this.title}</h3>
//         <p>${this.info}</p>
//         <p>${postComments}</p> 
//         </div> 
//         `)
// }