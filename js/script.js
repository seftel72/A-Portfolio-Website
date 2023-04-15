/* =========>>> typing animation  */

var typed = new Typed(".typing", {
    strings:["Programmer", "Front End Web Developer", "Graphic Designer"],
    typeSpeed:100,
    BackSpeed: 60,
    loop:true
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