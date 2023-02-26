
// import json file
// import myNav from "../../nav.json" assert {type: "json"};




// // ---------------------Nav-bar-----------------------
// const ul =document.getElementById("nav")
// myNav.map((e)=>{
//     console.log(e);
//     let liHome=document.createElement('li')

//     liHome.classList.add('nav__item');

//     let aHome =document.createElement('a');

//     aHome.setAttribute("href","#home");

//     // let iHome =document.createElement('i')
//     // iHome.classList.add('uil uil-estate','nav__icon')

//     aHome.innerHTML =e.Home;

//     // aHome.appendChild(iHome);

//     liHome.appendChild(aHome);

//     ul.appendChild(liHome)

//     // console.log(ul);
// })

const cards =document.getElementsByClassName('cards')
Service.map((e)=>{
    let div =document.createElement('div')
    div.classList.add('card')
    let dib =document.createElement('div')
    dib.classList.add('sbox')
    let title =document.createElement('h3')
    title.innerHTML = e.title
    dib.appendChild(title)
    div.appendChild(dib)
    cards.appendChild(div)
})