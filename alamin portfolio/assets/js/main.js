// import json file
import myNav from "../../nav.json" assert { type: "json" };
import myHome from "../../home.json" assert { type: "json" };
import myAbout from "../../about.json" assert { type: "json" };
import myFirstSkills from "../../firstSkills.json" assert { type: "json" };
import mySecondSkills from "../../secondSkills.json" assert { type: "json" };
import myThirdSkills from "../../thirdSkills.json" assert { type: "json" };
import myEducation from "../../education.json" assert { type: "json" };
// import myService from "../../service.json" assert { type: "json" }
import project from "../../Project.json" assert { type: "json" }
import contact from "../../contact.json" assert { type: "json" }
import footer from "../../footer.json" assert { type: "json" }







/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tab.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".tesimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("#section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ---------------------Nav-bar-----------------------
const ul = document.getElementById("nav");
myNav.map((e) => {
  let liHome = document.createElement("li");

  liHome.classList.add("nav__item");

  let aHome = document.createElement("a");

  aHome.setAttribute("href", "#home");
  aHome.classList.add("nav__link", "active-link");

  // let iHome =document.createElement('i')
  // iHome.classList.add('uil uil-estate','nav__icon')

  aHome.innerHTML = e.Home;

  // aHome.appendChild(iHome);

  liHome.appendChild(aHome);

  ul.appendChild(liHome);

  let liAbout = document.createElement("li");

  liAbout.classList.add("nav__item");

  let aAbout = document.createElement("a");

  aAbout.setAttribute("href", "#about");
  aAbout.classList.add("nav__link", "active-link");

  // let iHome =document.createElement('i')
  // iHome.classList.add('uil uil-estate','nav__icon')

  aAbout.innerHTML = e.About;

  // aHome.appendChild(iHome);

  liAbout.appendChild(aAbout);

  ul.appendChild(liAbout);

  let liSkills = document.createElement("li");

  liSkills.classList.add("nav__item");

  let aSkills = document.createElement("a");

  aSkills.setAttribute("href", "#skills");
  aSkills.classList.add("nav__link", "active-link");

  // let iHome =document.createElement('i')
  // iHome.classList.add('uil uil-estate','nav__icon')

  aSkills.innerHTML = e.Skills;

  // aHome.appendChild(iHome);

  liSkills.appendChild(aSkills);

  ul.appendChild(liSkills);

  let liServices = document.createElement("li");

  liServices.classList.add("nav__item");

  let aServices = document.createElement("a");

  aServices.setAttribute("href", "#services");
  aServices.classList.add("nav__link", "active-link");

  // let iHome =document.createElement('i')
  // iHome.classList.add('uil uil-estate','nav__icon')

  aServices.innerHTML = e.Services;

  // aHome.appendChild(iHome);

  liServices.appendChild(aServices);

  ul.appendChild(liServices);

  let liPortfolio = document.createElement("li");

  liPortfolio.classList.add("nav__item");

  let aPortfolio = document.createElement("a");

  aPortfolio.setAttribute("href", "#portfolio");
  aPortfolio.classList.add("nav__link", "active-link");

  // let iHome =document.createElement('i')
  // iHome.classList.add('uil uil-estate','nav__icon')

  aPortfolio.innerHTML = e.Portfolio;

  // aHome.appendChild(iHome);

  liPortfolio.appendChild(aPortfolio);

  ul.appendChild(liPortfolio);

  let liContactMe = document.createElement("li");

  liContactMe.classList.add("nav__item");

  let aContactMe = document.createElement("a");

  aContactMe.setAttribute("href", "#contact");
  aContactMe.classList.add("nav__link", "active-link");

  // let iHome =document.createElement('i')
  // iHome.classList.add('uil uil-estate','nav__icon')

  aContactMe.innerHTML = e.Contact;

  // aHome.appendChild(iHome);

  liContactMe.appendChild(aContactMe);

  ul.appendChild(liContactMe);
});

// ------------------- Home------------------
const div = document.getElementById("home-json");
myHome.map((e) => {
  let head = document.createElement("h1");
  head.classList.add("home__title");
  head.innerHTML = e.title;
  div.appendChild(head);

  let sub = document.createElement("h3");
  sub.classList.add("home__subtitle");
  sub.innerHTML = e.sub;
  div.appendChild(sub);

  let des = document.createElement("p");
  des.classList.add("home__description");
  des.innerHTML = e.des;
  div.appendChild(des);

  let a = document.createElement("a");
  a.setAttribute("href", "#content");
  a.classList.add("button", "button--flex");
  a.innerHTML = e.btn;
  div.appendChild(a);
});

// ---------------------About-----------------------

const abt = document.getElementById("about-json");
myAbout.map((e) => {
  let pera = document.createElement("p");
  pera.classList.add('class="about__description');
  pera.innerHTML = e["About-des"];
  abt.appendChild(pera);

  let abtIn = document.createElement("div");

  abtIn.classList.add("about__info");

  e["About-info"].map((a) => {
    let div = document.createElement("div");

    let title = document.createElement("span");

    title.classList.add("about__info-title");
    title.innerHTML = a.title;
    div.appendChild(title);

    let name = document.createElement("span");
    name.classList.add("about__info-name");
    name.innerHTML = a.name;
    div.appendChild(name);
    abtIn.appendChild(div);
  });
  abt.appendChild(abtIn);

  let abtBtn = document.createElement("div");
  abtBtn.classList.add("about__buttons");
  let cv = document.createElement("a");
  cv.setAttribute("href", "../assets/pdf/cv of alamin.pdf");
  cv.classList.add("button", "button--flex");
  cv.innerHTML = e["About-btn"];
  abtBtn.appendChild(cv);
  abt.appendChild(abtBtn);
});

// ---------------firstSKills-------------------
const listGrid = document.querySelector("#List");

myFirstSkills.map((e) => {
  let data = document.createElement("div");
  data.classList.add("skills__data");
  let titles = document.createElement("div");
  titles.classList.add("skills__titles");
  let html = document.createElement("h3");
  html.classList.add("skills__name");
  html.innerHTML = e.name;

  titles.appendChild(html);
  let per = document.createElement("span");
  per.innerHTML = e.number;
  titles.appendChild(per);

  data.appendChild(titles);
  let bar = document.createElement("div");
  bar.classList.add("skills__bar");
  let percentage = document.createElement("span");
  percentage.classList.add("skills__percentage");
  percentage.style.width = e.skills;
  bar.appendChild(percentage);
  data.appendChild(bar);

  listGrid.appendChild(data);
});

// ------------------secondSkills------------------
const listGr = document.querySelector("#backend");

mySecondSkills.map((a) => {
  let data1 = document.createElement("div");
  data1.classList.add("skills__data");
  let titles1 = document.createElement("div");
  titles1.classList.add("skills__titles");
  let php = document.createElement("h3");
  php.classList.add("skills__name");
  php.innerHTML = a.name;

  titles1.appendChild(php);
  let per1 = document.createElement("span");
  per1.innerHTML = a.number;
  titles1.appendChild(per1);

  data1.appendChild(titles1);
  let bar1 = document.createElement("div");
  bar1.classList.add("skills__bar");
  let percentage1 = document.createElement("span");
  percentage1.classList.add("skills__percentage");
  percentage1.style.width = a.skills;
  bar1.appendChild(percentage1);
  data1.appendChild(bar1);

  listGr.appendChild(data1);
});
// ----------------------THIRDSKILLS--------------------
const list = document.querySelector("#desing");

myThirdSkills.map((e) => {
  let data2 = document.createElement("div");
  data2.classList.add("skills__data");
  let titles2 = document.createElement("div");
  titles2.classList.add("skills__titles");
  let figma = document.createElement("h3");
  figma.classList.add("skills__name");
  figma.innerHTML = e.name;

  titles2.appendChild(figma);
  let per2 = document.createElement("span");
  per2.innerHTML = e.number;
  titles2.appendChild(per2);

  data2.appendChild(titles2);
  let bar2 = document.createElement("div");
  bar2.classList.add("skills__bar");
  let percentage2 = document.createElement("span");
  percentage2.classList.add("skills__percentage");
  percentage2.style.width = e.skills;
  bar2.appendChild(percentage2);
  data2.appendChild(bar2);

  list.appendChild(data2);
});

// --------------------Qualification---------------------------------

const edu = document.getElementById("education");
myEducation.map((e) => {
  e.education.map((a, i) => {
    if (i % 2 == 0) {
      let quaData = document.createElement("div");
      quaData.classList.add("qualification__data");
      let div = document.createElement("div");
      let title = document.createElement("h3");
      title.classList.add("qualification__title");
      title.innerHTML = a.title;
      div.appendChild(title);
      let sub = document.createElement("span");
      sub.classList.add("qualification__subtitle");
      sub.innerHTML = a.sub;
      div.appendChild(sub);
      let calender = document.createElement("div");
      calender.classList.add("qualification__calender");
      let Ai = document.createElement("i");
      Ai.innerHTML = `<i class="uil uil_calender-alt"></i>`;
      calender.appendChild(Ai);
      calender.innerHTML = a.calender;
      div.appendChild(calender);
      quaData.appendChild(div);

      let spDiv = document.createElement("div");
      let rounder = document.createElement("span");
      rounder.classList.add("qualification__rounder");
      spDiv.appendChild(rounder);
      let line =document.createElement('span')
      line.classList.add('qualification__line')
      spDiv.appendChild(line)

      quaData.appendChild(spDiv);

      edu.appendChild(quaData);
    } else {
      let quaData = document.createElement("div");
      quaData.classList.add("qualification__data");
      let dib = document.createElement("div");
      quaData.appendChild(dib);

      let spDiv = document.createElement("div");
      let rounder = document.createElement("span");
      rounder.classList.add("qualification__rounder");
      spDiv.appendChild(rounder);
    //   for(let m =0;m<=a;m++){
        let line =document.createElement('span')
        line.classList.add('qualification__line')
        spDiv.appendChild(line)
    //   }

      quaData.appendChild(spDiv);

      let div = document.createElement("div");
      let title = document.createElement("h3");
      title.classList.add("qualification__title");
      title.innerHTML = a.title;
      div.appendChild(title);
      let sub = document.createElement("span");
      sub.classList.add("qualification__subtitle");
      sub.innerHTML = a.sub;
      div.appendChild(sub);
      let calender = document.createElement("div");
      calender.classList.add("qualification__calender");
      let Ai = document.createElement("i");
      Ai.innerHTML = `<i class="uil uil_calender-alt"></i>`;
      calender.appendChild(Ai);
      calender.innerHTML = a.calender;
      div.appendChild(calender);
      quaData.appendChild(div);
      edu.appendChild(quaData);


    }
  });
});

// ---------------------Services-----------------is not work
// let service =document.getElementById('services');

// myService.map((e)=>{
//     let content =document.createElement('div');
//     content.classList.add('services__content')
//     let div=document.createElement('div');
//     let title = document.createElement('h3')
//     title.classList.add('services__title')
//     title.innerHTML = e.title;
//     div.appendChild(title)
//     content.appendChild(div)
//     let btn =document.createElement('span')
//     btn.classList.add('button','button--flex','button--small','button--link','services__button')
//     btn.innerHTML = e.btn
//     let btnI =document.createElement('i');
//     btnI.innerHTML = `<i class="uil uil-arrow-right"></i>`;
//     btnI.classList.add('button__icon')
//     btn.appendChild(btnI)
//     content.appendChild(btn)
    
//     e.modal.map((a)=>{
//         let modalSer =document.createElement('div')
//         modalSer.classList.add('services__modal');
//         let mdlContent =document.createElement('div')
//         mdlContent.classList.add('services__modal-content')
//         let modalTitle =document.createElement('h4')
//         modalTitle.classList.add('services__modal-title')
//         modalTitle.innerHTML = a["modal-title"]
//         mdlContent.appendChild(modalTitle)
//         modalSer.appendChild(mdlContent)
//         let mdlI =document.createElement('i')                    
//         mdlI.innerHTML =`<i class="uil uil-times"></i>`
//         mdlI.classList.add('services__modal-close')
//         mdlContent.appendChild(mdlI);
      
        
//     })
//     service.appendChild(content)
// })



//================================

// project static data 

let project__data = document.querySelector('.project__data');

project.map((e)=>{
  let h2 = document.createElement('h2')
  h2.classList.add('project__title');
  h2.innerHTML = e.title;
  project__data.appendChild(h2)

  let p = document.createElement('p')
  p.classList.add('project__description')
  p.innerHTML = e.des;
  project__data.appendChild(p)


  let btn = document.createElement('a')
  btn.classList.add('button','button--flex','button--white');
  btn.setAttribute('href','#contact');
  btn.innerHTML = e.btn;
  let i = document.createElement('i');
  i.innerHTML = `<i class="uil uil-message project__icon button__icon"></i>`
  btn.appendChild(i)
  project__data.appendChild(btn);

})


// ====================================

// contact me static data from json file
const call =document.getElementById('call')
const email =document.getElementById('email')
const loc =document.getElementById('location')

contact.map((e)=>{
  let phone = document.createElement('span');
  phone.classList.add('contact_subtitle');
  phone.innerHTML = e.phone
  call.appendChild(phone)
  let em =document.createElement('span')
  em.classList.add('contact_subtitle')
  em.innerHTML =e.email
  email.appendChild(em)
  let loca =document.createElement('span')
  loca.classList.add('contact_subtitle')
  loca.innerHTML =e.location
  loc.appendChild(loca)
})

// ===================footer============
const foot =document.getElementById('footer')
footer.map((e)=>{
  let liSer =document.createElement('li')
  let a =document.createElement('a')
  a.classList.add('footer__link')
  a.setAttribute('href','#services')
  a.innerHTML = e.Services
  liSer.appendChild(a)
  foot.appendChild(liSer)

  let liPort =document.createElement('li')
  let a1=document.createElement('a')
  a1.classList.add('footer__link')
  a1.setAttribute('href','#services')
  a1.innerHTML = e.Portfolio
  liPort.appendChild(a1)
  foot.appendChild(liPort)

  let liCon =document.createElement('li')
  let a2 =document.createElement('a')
  a2.classList.add('footer__link')
  a2.setAttribute('href','#services')
  a2.innerHTML = e.Contact
  liCon.appendChild(a2)
  foot.appendChild(liCon)
})