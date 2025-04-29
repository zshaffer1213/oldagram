const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

const mainContent = document.getElementById('posts')
const likeBtn = document.getElementById("like")
const likeTotal = document.getElementById("likes")
const postImg = document.getElementById("post-img")

let postContent = ``

for (let i = 0;  i < posts.length; i++) {
    postContent += `
                <section class="posts" data-index="${i}">
                    <div class="wrapper">
                        <img class="user-img post-user-img" src="${posts[i].avatar}">
                        <p><span class="break bold"> ${posts[i].name} </span> ${posts[i].location}</p>
                    </div>
                    <div class="post-img-container">
                        <img class="post-img" id="post-img" src="${posts[i].post}" data-index="${i}">
                        <img class="heart-overlay" id="post-img" src="/images/heart-fill-svgrepo-com.svg" data-index="${i}">
                    </div>
                    <div class="interact-icons">
                        <img class="icon like-btn" id="like" src="/images/icon-heart.png" data-index="${i}">
                        <img class="icon" src="/images/icon-comment.png">
                        <img class="icon" src="/images/icon-dm.png">
                    </div>
                    <p class="bold likes"><span class="likes" data-index="${i}">${posts[i].likes}</span> likes</p>
                    <p class="user-comment"><span class="bold p-r">${posts[i].username} </span>${posts[i].comment}</p>
                </section>
    `
}

mainContent.innerHTML = postContent

const likeButtons =  document.querySelectorAll(".like-btn")
const postImages = document.querySelectorAll(".post-img")
const heartOverlay = document.querySelectorAll(".heart-overlay")

likeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        const index = btn.getAttribute('data-index')
        likePost(index)
    })
})

postImages.forEach(img => {
    img.addEventListener("dblclick", function() {
        const index = img.getAttribute("data-index")
        likePost(index)
        
    })
})

function likePost(i) {
    const likeCount = document.querySelector(`.likes[data-index="${i}"]`)
    const heartIcon = document.querySelector(`.like-btn[data-index="${i}"]`)
    const overlay = document.querySelector(`.heart-overlay[data-index="${i}"]`)
    
    if (posts[i].liked === true) {
        posts[i].likes -= 1
        heartIcon.src = "/images/icon-heart.png"
        posts[i].liked = false    
    } else {
        posts[i].likes += 1
        heartIcon.src = "/images/heart-fill-svgrepo-com.svg"
        posts[i].liked = true
        
        
        overlay.style.animation = "none"
        overlay.offsetHeight
        overlay.style.animation = "popHeart 0.6s ease"
    
    }
    likeCount.textContent = posts[i].likes
}