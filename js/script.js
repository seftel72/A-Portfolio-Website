/* =========>>> typing animation  */

var typed = new Typed(".typing", {
    strings:["Frontend Web Developer."],
    typeSpeed:50,
    BackSpeed: 60,
    loop:false
})


// Aside
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length;
for(let i=0; i<totalNavList; i++){
    // console.log(navList[i]);
    const a = navList[i].querySelector("a");
    console.log(a);
}