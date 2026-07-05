// =======================================
// MioLifeRebirth Commission Queue
// =======================================

// Status:
// "available"
// "waiting"
// "progress"

const slots = [

    "available",

    "available",

    "available"

];

// =======================================

const heroButton = document.getElementById("commissionStatus");

const queueCards = document.querySelectorAll(".queue-card");

const statusInfo = {

    progress:{
        emoji:"🟥",
        title:"Sedang Dikerjakan"
    },

    waiting:{
        emoji:"🟨",
        title:"Menunggu"
    },

    available:{
        emoji:"🟩",
        title:"Tersedia"
    }

};

// Hero Button

const availableSlots = slots.filter(s => s === "available").length;

if (availableSlots === 0) {

    heroButton.innerHTML="🔴 COMMISSION DITUTUP";
}

else if (availableSlots === 1) {

    heroButton.innerHTML="🟡 SLOT TERAKHIR";

}

else {

    heroButton.innerHTML="🟢 COMMISSION DIBUKA";

}

// Queue Card

queueCards.forEach((card, index) => {

    const state = slots[index];

    card.innerHTML = `

        <h3>

            ${statusInfo[state].emoji}

            Slot #${index + 1}

        </h3>

        <p>

            ${statusInfo[state].title}

        </p>

    `;

});
// ================= BACK TO TOP =================

const topButton = document.getElementById("backToTop");

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// ================= NAVBAR SCROLL =================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(10,10,20,.9)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.padding = "15px 80px";

    } else {

        navbar.style.background = "rgba(10,10,20,.55)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.padding = "20px 80px";

    }

});

// ================= SCROLL REVEAL =================

const hiddenElements = document.querySelectorAll("section");

hiddenElements.forEach(el => {

    el.classList.add("hidden");

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => observer.observe(el));

const lang = {

    en:{

        heroDesc:"Bringing Your Gacha Characters to Life with Smooth Meme Animations",

        aboutTitle:"About",

        aboutText:"I specialize in smooth and expressive Gacha meme animations for TikTok, YouTube Shorts, and social media."

    },

    id:{

        heroDesc:"Menghidupkan Karakter Gacha Anda dengan Animasi Meme yang Halus",

        aboutTitle:"Tentang",

        aboutText:"Saya membuat animasi meme Gacha yang halus dan ekspresif untuk TikTok, YouTube Shorts, dan media sosial."

    }

};

// ================= VIDEO AUTO PAUSE =================

const videos = document.querySelectorAll("video");

videos.forEach(video => {

    video.addEventListener("play", () => {

        videos.forEach(v => {

            if(v !== video){

                v.pause();

            }

        });

    });

});