/*!
* Start Bootstrap - Clean Blog v6.0.7 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/

const postsDiplay = document.getElementById("postsDisplay");
const buttonMore = document.getElementById("morePosts");
var displayedPosts = 0;
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");
const authorName = document.getElementById("authorName");


const author = (id) =>{
    switch(id) {
        case 1 : 
        return "Adèle Jérémy";
        break;
        case 2 : 
        return "Albin Léana";
        break;
        case 3 : 
        return "Agathe Kevin";
        break;
        case 4 : 
        return "Nelly Florent";
        break;
        case 5 : 
        return "Arthur Lili";
        break;
        case 6 : 
        return "Amable Gratien";
        break;
        case 7 : 
        return "Édith Antonin";
        break;
        case 8 : 
        return "Véronique Jules";
        break;
        case 9 : 
        return "Lilianne Jérémy";
        break;
        case 10 : 
        return "Jourdain Joffrey";
        break;
    }
}

const fetchPosts = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for(let postsCounter = 0; postsCounter < 10; postsCounter++){
             elements(posts);
        }
    });
}
const showpost = (posts, postBody) =>{
    const toDelete = document.getElementsByClassName("to-delete");
    const titre = document.getElementById("titre");
    const newP = document.createElement("p");
    const newButton = document.createElement("button");
    while (toDelete[0]) {
        toDelete[0].parentNode.removeChild(toDelete[0]);
    }
    buttonMore.parentNode.removeChild(buttonMore);
    titre.textContent = posts;
    postsDiplay.appendChild(newP);
    newP.textContent = postBody;
    postsDiplay.appendChild(newButton);
    newButton.classList.add("btn", "btn-primary", "text-uppercase");
    newButton.setAttribute("type", "button");
    newButton.setAttribute("id", "retour");
    newButton.textContent = "Retour aux articles";
    newButton.addEventListener("click", ()=>{
        window.location.href='/index.html'
    })
}
const elements = (posts)=>{
    const newDiv = document.createElement("div");
    const newH2 = document.createElement("h2");
    const newH3 = document.createElement("h3");
    const newA = document.createElement("a");
    const newP = document.createElement("p");
    const newHr = document.createElement("hr");
    const description = posts[displayedPosts].body.split(' ').slice(0, 3).join(' ');
    postsDiplay.appendChild(newDiv);
    newDiv.appendChild(newA);
    newA.appendChild(newH2);
    newA.appendChild(newH3);
    postsDiplay.appendChild(newHr);
    newDiv.appendChild(newP);
    newDiv.classList.add("post-preview", "to-delete");
    newH2.classList.add("post-title");
    newH3.classList.add("post-subtitle");   
    newP.classList.add("post-meta");
    newHr.classList.add("to-delete");
    newH2.setAttribute("id", posts[displayedPosts].id);
    newA.addEventListener('click', (e)=>{
        const id = e.target.id;
        console.log(id);
        showpost(posts[id - 1].title, posts[id - 1].body);
    });
    newH2.textContent = `[${posts[displayedPosts].id}] ${posts[displayedPosts].title}`;
    newH3.textContent = `${description}...[Lire la suite]`;
    newP.textContent = `Posté par: ${author(posts[displayedPosts].userId)}`;
    displayedPosts++;
}


/*AXIOS */
// const getPosts = async () =>{ 
//     const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     const posts = res.data;
//     return posts;
// }


// const displayPosts = (data)=>{
//     const newDiv = document.createElement("div");
//     const newH2 = document.createElement("h2");
//     const newH3 = document.createElement("h3");
//     const newA = document.createElement("a");
//     const newP = document.createElement("p");
//     const newHr = document.createElement("hr");
//     postsDiplay.appendChild(newDiv);
//     newDiv.appendChild(newA);
//     newA.appendChild(newH2);
//     newA.appendChild(newH3);
//     postsDiplay.appendChild(newHr);
//     newDiv.appendChild(newP);
//     newDiv.classList.add("post-preview");
//     newH2.classList.add("post-title");
//     newH3.classList.add("post-subtitle");   
//     newP.classList.add("post-meta");
//     newH2.textContent = `${data.title}`;
// }





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
buttonMore.addEventListener('click', fetchPosts);
