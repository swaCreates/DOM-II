// Your code goes here

// Nav Anchors #1 //

const anchorHover= document.querySelectorAll('.nav-link');

anchorHover.forEach(function(anchor){
    anchor.addEventListener('mouseover', function(event){
        event.target.style.color= 'red';
        event.target.style.textTransform= 'uppercase';
    })
    anchor.addEventListener('mouseout', function(event){
        event.target.style.color= '';
        event.target.style.textTransform= '';
    })
})

// Document #2 //

document.addEventListener('keydown', function(event){
    console.log(document.textContent+= event.code);
})

// Buttons #3 //

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

// Images #4 //

const image= document.querySelectorAll('img');

image.forEach(function(img){
    img.addEventListener('dblclick', function(event){
        event.target.style.transform = "scale(1.1)";
        event.style.transition = "all 0.1s";
    })
    img.addEventListener('mouseout', function(event){
        event.target.style.transform ='';
        event.style.transition ='';
    })
})