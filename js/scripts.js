/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

const postsDiplay = document.getElementById("postsDisplay");
const button = document.getElementById("morePosts");
const displayedPosts = 0;


const fetchPosts = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for(displayedPosts; displayedPosts = displayedPosts + 10; displayedPosts++){
            const newDiv = document.createElement("div");
            const newH2 = document.createElement("h2");
            const newH3 = document.createElement("h3");
            const newA = document.createElement("a");
            const newHr = document.createElement("hr");
            postsDiplay.appendChild(newDiv);
            newDiv.appendChild(newA);
            newA.appendChild(newH2);
            newA.appendChild(newH3);
            postsDiplay.appendChild(newHr);
            newDiv.classList.add("post-preview");
            newH2.classList.add("post-title");
            newH3.classList.add("post-subtitle");   
            newA.setAttribute("href", "post.html");
            newH2.textContent = `${posts[i].title}`;
            newH3.textContent = `${posts[i].body}`;
        }
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