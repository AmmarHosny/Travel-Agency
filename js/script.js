// select search

let search = document.querySelector(".container .fa-search")
let pupsearch = document.querySelector(".search .one")
console.log(search)
console.log(pupsearch)
search.addEventListener("click", () => {
    pupsearch.classList.toggle("active")
})

// select vidoe
let bullets = document.querySelectorAll(".bullets li")
console.log(bullets)
let vidoe = document.querySelector("video")
console.log(vidoe.src)

// select localstorg
// let vidoe = document.querySelector("video")

let mainloc = localStorage.getItem("data-vido")



if (mainloc !== null) {
    vidoe.src = mainloc

    bullets.forEach(t => {
        t.classList.remove("active1")
        
        if (t.dataset.v === mainloc) {
            t.classList.add("active1")
        }
    })
    
}

bullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        
        e.target.parentElement.querySelectorAll(".active1").forEach(t => {
            t.classList.remove("active1")
        })
        e.target.classList.add("active1")
        vidoe.src = e.target.dataset.v
        
        localStorage.setItem("data-vido" ,  e.target.dataset.v)
    })
})




// select navbar menu

let links = document.querySelectorAll(".navbar .container .navbar-nav li a.nav-link")
console.log(links)

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault()
        document.querySelector(e.target.dataset.link).scrollIntoView({
            behavior:"smooth"
        })
    })
})

// select botton to

let btnTop = document.querySelector("span")
console.log(btnTop)
let book = document.querySelector(".book")
console.log(book)

window.onscroll = function () {
    if (window.scrollY > book.offsetTop) {
        btnTop.style = "right:0px",
        btnTop.onclick = function () {
            document.querySelector(".landing").scrollIntoView({
        behavior:"smooth"
    })
        }
    } else {
        btnTop.style = "right:-70px"
    }
}

// selec swider reviwe

var swiper = new Swiper(".mySwiper", {
        autoplay:{
            delay:3000,
    },
        spaceBetween: 20,
        freeMode: true,
        
        breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    });
var swiper = new Swiper(".mybrand", {
        autoplay:{
            delay:3000,
    },
        spaceBetween: 20,
        freeMode: true,

        breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },
    });