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

