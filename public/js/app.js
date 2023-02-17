//initialization of dom
const navbar = document.querySelector(".nav-items");
const logo1 = document.querySelector(".nav-logo1");
const logo2 = document.querySelector(".nav-logo2");
const li = navbar.querySelectorAll("li");

//onclick func() navbar slide down
function func1(){
    logo1.style.display = "none";
    logo2.style.display = "block";
    navbar.style.transform = "translateY(-5%)";
    li.forEach((a , index) => {
        const a1 = a.querySelector("a");
        a1.style.animation = `text 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
}

function func2(){
    logo1.style.display = "block";
    logo2.style.display = "none";
    li.forEach((a , index) => {
        const a1 = a.querySelector("a");
        a1.style.animation = `text1 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
    navbar.style.transform = "translateY(-150%)";
}

function func3(){
    if(window.innerWidth <= 760){
        logo1.style.display = "block";
        logo2.style.display = "none";
        li.forEach((a , index) => {
            const a1 = a.querySelector("a");
            a1.style.animation = `text1 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
        navbar.style.transform = "translateY(-150%)";
    }
}

//initialization of dom
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");
const image3 = document.querySelector(".image3");
const sub1 = document.querySelector(".sub");
const sub2 = document.querySelector(".sub2");
const image1 = document.querySelector(".image1");
const image11 = document.querySelector(".image11");
const image2 = document.querySelector(".image2");
const para = document.querySelector(".para");
const about = document.querySelector(".about");
const product = document.querySelector(".product");
const imageContainer = document.querySelectorAll(".image-container");

//openning image container animation
var tl = gsap.timeline();
tl.fromTo(slider1,1,{x:"-100%"},{x:"0%" , ease: Power2.easeInOut});
tl.fromTo(slider2,1,{x:"-100%"},{x:"0%" , ease: Power2.easeInOut},"-=0.85");
tl.fromTo(slider3,1,{x:"-100%"},{x:"0%" , ease: Power2.easeInOut},"-=0.85");

if(window.innerWidth > 600){
    tl.fromTo(image3,1,{opacity:0,x:"300%"},{opacity:1,x:"0%" , ease: Power2.easeInOut});
    tl.fromTo(sub1,1,{opacity:0,x:"-100%"},{opacity:1,x:"0%" , ease: Power2.easeInOut},"-=1");
    tl.fromTo(sub2,1,{opacity:0,x:"-100%"},{opacity:1,x:"0%" , ease: Power2.easeInOut},"-=1");
    tl.fromTo(image1,1,{opacity:0,y:"100%"},{opacity:1,y:"0%" , ease: Power2.easeInOut});
    tl.fromTo(image2,1,{opacity:0,y:"-100%"},{opacity:1,y:"0%" , ease: Power2.easeInOut},"-=1");
}
else if(window.innerWidth <= 600){
    tl.from(sub1,1,{opacity:0,y:"20%", ease: Power2.easeInOut})
    .from(sub2,1,{opacity:0,y:"-60%", ease: Power2.easeInOut})
    .to(sub1,0.5,{opacity:0})
    .to(sub2,0.5,{opacity:0},"-=0.5")
    .fromTo(image1,1,{opacity:0,y:"-100%"},{opacity:1,y:"0%" , ease: Power2.easeInOut})
    .fromTo(image3,1,{opacity:0,y:"-100%"},{opacity:1,y:"0%" , ease: Power2.easeInOut},"-=0.85")
    .fromTo(image2,1,{opacity:0,y:"-100%"},{opacity:1,y:"0%"  , ease: Power2.easeInOut},"-=0.85")
    .from(".sub3",1,{opacity:0, x:"50%", ease: Power2.easeInOut})
    .from(".sub4",1,{opacity:0, x:"-50%", ease: Power2.easeInOut},"-=1");
}

//animate on scroll : about page
var tl1 = gsap.timeline({scrollTrigger:{
        trigger:para,
        start:"center bottom",
        toggleActions:"restart none restart pause"
}});
tl1.fromTo(para,1,{opacity:0,x:"-100%"},{opacity:1,x:"0%" , ease: Power2.easeInOut});
tl1.fromTo(".about-cont",1,{opacity:0,x:"300%"},{opacity:1,x:"0%" , ease: Power2.easeInOut},"-=1");

//animate on scroll : contact page
function textContainer(elem, start, end , delay, dir){
    const element=document.querySelector(elem);
    var time = gsap.timeline({scrollTrigger:{
        trigger:element,
        start:"top bottom",
        toggleActions:"restart none restart pause"
    }});
    if(dir === "y"){
        time.fromTo(element,0.5,{opacity:0, y:start},{opacity:1, y:end, ease: Power4.easeInOut},delay);
    } else{
        time.fromTo(element,0.5,{opacity:0, x:start},{opacity:1, x:end, ease: Bounce.Out},delay);
    }
}

textContainer(".add","-30%","0%");
textContainer(".add1","-30%","0%","-=0.5");
textContainer(".add2","-30%","0%","-=0.5");
textContainer(".phon","-40%","0%");
textContainer(".phon1","-30%","0%","-=0.5");
textContainer(".mobil","-40%","0%");
textContainer(".mobil1","-30%","0%","-=0.5");
textContainer(".whats","-40%","0%");
textContainer(".whats1","-30%","0%","-=0.5");
textContainer(".maill","-30%","0%");
textContainer(".logo1","-300%","0%","+=0.3");
textContainer(".logo2","-300%","0%","+=0.3");
textContainer(".logo3","-300%","0%","+=0.3");
textContainer(".logo4","-300%","0%","+=0.3");
textContainer(".logo5","-300%","0%","+=0.3");
textContainer(".con1","-50%","0%","+=0","y");
textContainer(".con2","50%","0%","+=0","y");
textContainer(".pro-head","-50%","0%","+=0","y");
textContainer("iframe","20%","0%");

//photos slide animation : product
    var tween = gsap.fromTo(".prod1",{
        duration:10,
        x:1020,
        ease:"none",
        repeat:50
    },{
        duration:10,
        x:-1500,
        ease:"none",
        repeat:50
    });

    var tween = gsap.fromTo(".prod2",{
        duration:10,
        x:1000,
        ease:"none",
        delay:1,
        repeat:50
    },{
        duration:10,
        x:-1500,
        ease:"none",
        delay:1,
        repeat:50
    });

    var tween = gsap.fromTo(".prod3",{
        duration:10,
        x:1000,
        ease:"none",
        delay:2,
        repeat:50
    },{
        duration:10,
        x:-1500,
        ease:"none",
        delay:2,
        repeat:50
    });

    var tween = gsap.fromTo(".prod4",{
        duration:10,
        x:1020,
        ease:"none",
        delay:2.7,
        repeat:50
    },{
        duration:10,
        x:-1500,
        ease:"none",
        delay:2.7,
        repeat:50
    });

    var tween = gsap.fromTo(".prod5",{
        duration:10,
        x:1000,
        ease:"none",
        delay:3.5,
        repeat:50
    },{
        duration:10,
        x:-1500,
        ease:"none",
        delay:3.5,
        repeat:50
    });

    var tween = gsap.fromTo(".prod6",{
        duration:10,
        x:1020,
        ease:"none",
        delay:4.3,
        repeat:50
    },{
        duration:10,
        x:-1500,
        ease:"none",
        delay:4.3,
        repeat:50
    });