const eventsLink = "https://losmorgan.afryman.dk//wp-json/wp/v2/event/";
const videosLink = "https://losmorgan.afryman.dk//wp-json/wp/v2/video/";
/* const videosTemplate = document.querySelector(".videos-template").content;
const videosBtnTemplate = document.querySelector(".videoBtn-template").content; */
const eventsTemplate = document.querySelector(".events-template").content;
const upcomingEvents = document.querySelector(".upcoming");
const pastEvents = document.querySelector(".past");
const videoBtnContainer = document.querySelector(".videoBtn-wrapp");
const videoSlides = document.querySelector(".videos-wrapp");
const btnsVideo = document.getElementsByClassName("demo");



function getEvents() {
    fetch(eventsLink).then(e => e.json()).then(showEvents);
}

function getVideos() {
    fetch(videosLink).then(e => e.json()).then(showVideos);
}

function showEvents(events) {
    events.forEach(event => {
        const clone = eventsTemplate.cloneNode(true);

        clone.querySelector(".event-month").textContent = event.month;
        clone.querySelector(".event-day").textContent = event.day;
        clone.querySelector("#city").textContent = event.city;
        clone.querySelector("#location").textContent = event.location;
        clone.querySelector(".ticket-wrapper").href = event.tickets;
        clone.querySelector(".rsvp-wrapper").href = event.tickets;

        if (event.categories == 3) {
            upcomingEvents.appendChild(clone);
        } else {
            clone.querySelector(".event-date").style.background = "red";
            clone.querySelector(".border").style.background = "red";

            pastEvents.appendChild(clone);
        }
    });
}

function showVideos(videos) {
    videos.forEach(video => {
        /* const clone = videosTemplate.cloneNode(true);
        const clone2 = videosBtnTemplate.cloneNode(true);

        clone.querySelector(".video").src = video.link;
        clone2.querySelector(".demo").src = video.img.guid;


        videoSlides.appendChild(clone);
        videoBtnContainer.appendChild(clone2); */
    });
}

getEvents();
getVideos();


// vide slider
function currentDiv(n) {
    showDivs(slideIndex = n);
}


function showDivs(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let slidesBtns = document.getElementsByClassName("demo");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < slidesBtns.length; i++) {
        slidesBtns[i].classList.remove("btnActive");
    }
    slides[slideIndex - 1].classList.add("active");
    slidesBtns[slideIndex - 1].classList.add("btnActive");
}

function showSlides() {
    activeBtnSlide[0].classList.add("active");
}