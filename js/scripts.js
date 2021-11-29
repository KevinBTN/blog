/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

const postsDiplay = document.getElementById("postsDisplay");
const button = document.getElementById("morePosts");
var displayedPosts = 0;
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");




const fetchPosts = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for(let postsCounter = 0; postsCounter < 10; postsCounter++){
            if(location.pathname=="/index.html"){
                const newDiv = document.createElement("div");
                const newH2 = document.createElement("h2");
                const newH3 = document.createElement("h3");
                const newA = document.createElement("a");
                const newHr = document.createElement("hr");
                const description = post.body.split(' ').slice(0, 3).join(' ');
                postsDiplay.appendChild(newDiv);
                newDiv.appendChild(newA);
                newA.appendChild(newH2);
                newA.appendChild(newH3);
                postsDiplay.appendChild(newHr);
                newDiv.classList.add("post-preview");
                newH2.classList.add("post-title");
                newH3.classList.add("post-subtitle");   
                newA.setAttribute("href", "post.html" + "?" + post.id);
                newH2.textContent = `[${posts[displayedPosts].id}] ${posts[displayedPosts].title}`;
                newH3.textContent = `${posts[displayedPosts].body}`;
            }
            else {
                const postId = document.URL.toString().split("?")[1];
                postTitle.textContent = `${posts[postId - 1].title}`;
                postContent.textContent = `${posts[postId - 1].body}`;
            }
        })

    });
}



window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

window.addEventListener('load', fetchPosts);
button.addEventListener('click', fetchPosts);