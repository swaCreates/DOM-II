// Your code goes here

// Nav Anchor (Hover) #1 //

const anchorHover= document.querySelectorAll('.nav-link');

anchorHover.forEach(function(anchor){
    anchor.addEventListener('mouseover', function(event){
        event.target.style.color= 'red';
        event.target.style.textTransform= 'uppercase';
        event.target.style.transform= 'rotate(180deg)';
    })
    anchor.addEventListener('mouseout', function(event){
        event.target.style.color= '';
        event.target.style.textTransform= '';
        event.target.style.transform= 'rotate(0deg)'
    })
})

// Document (Key Down) #2 //

document.addEventListener('keydown', function(event){
    console.log(document.textContent+= event.code);
})

// Buttons (Click) #3 //

const buttons= document.querySelectorAll('.btn');

buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
        event.target.style.backgroundColor= 'red';
        event.target.style.color='white';
        
    })
    btn.addEventListener('mouseout', function(event){
        event.target.style.backgroundColor= '';
        event.target.style.color= '';
    })
})

// Images (Dbl Click) #4 //

const image= document.querySelectorAll('img');

image.forEach(function(img){
    img.addEventListener('dblclick', function(event){
        event.target.style.transform = "scale(1.1)";
        event.style.transition = "all 0.1s";
    })
    img.addEventListener('mouseout', function(event){
        event.target.style.transform ='';
        event.style.transition ='0';
    })
})

// (Page Scroll) #5 //

window.addEventListener('scroll', function(){
    this.console.log('User is scrolling');
})

// Window Resize #6 //

window.addEventListener('resize', function(){
    this.console.log('Random screen-sizing: ' + Math.random());
})

// Error Alert #7 //

const links= document.querySelectorAll('.nav-link');

links.forEach(function(err){
    err.addEventListener('click', function(){
        alert('Error! This page has been hacked. Nothing works!!!.');
    })
})

// Fun Bus title #8 //

const title= document.querySelector('.logo-heading')

title.addEventListener('mouseover', function(event){
    event.target.style.transform= 'rotate(180deg)';
})

title.addEventListener('mouseout', function(event){
    event.target.style.transform= 'rotate(0deg)';
})
// Page Load #9 //

window.addEventListener('load', function(){
    alert('Loading...Loading...Loading.....Loaded :) ');
});

// Dbl Click Page #10 //

const body= document.querySelector('body');

body.addEventListener('dblclick', function(event){
    event.target.style.backgroundColor= 'black';
})

// Prevent Default //

const anchors= document.querySelectorAll('.nav-link');

anchors.forEach(function(links){
    links.addEventListener('click', function(event){
        event.preventDefault();
    })
})

