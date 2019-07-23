// $(document).ready(function() {
//     $("a.load_comments").on("click", function(el){
//         $.get(this.href).success(function(response){
//             $("div.comments").html(response)
//         })
//         el.preventDefault();
//     })


//     $("a.show_info").on("click", function(e){
//         $.get(this.href).success(function(response){
//             $("div.info").html(response)
//         })
//         e.preventDefault();
//     })

    // $('#my_form').submit(function(event) {
    //     event.preventDefault();  
    //     $.ajax({
    //       type: "POST",
    //       url: $(this).attr('create'),
    //       data: $(this).serialize(),
    //       dataType: "JSON"
    //     });
    //   });

    // $(function(){
    //     $("#new_comment").on("submit", function(e){
    //         e.preventDefault();
    //     })
    // })

// function listenForClick(){
//     $('button#posts-data').on('click', function(event) {
//         event.preventDefault()
//         getPosts()
//     })
// }

// function listenForNewPostFormClick() {
// 	$('a.new_comment').on('click', function (event) {
// 		event.preventDefault()
// 		let newPostForm = Post.newPostForm()
		
// 		document.querySelector('div#new-post-form-div').innerHTML = newPostForm
// 	})
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
//     static newPostForm() {
//         return (`
//         <strong>New post comment form</strong>
//             <form>
//                 <input type='text' name='content'></input><br>
//                 <input type='submit' />
//             </form>
//         `)
//     }
// }




// Post.prototype.postHTML = function() {

//     let postComments = this.comments.map(comment => {
//         return(`
//             <p>${this.comments.content}</p> 
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

// })