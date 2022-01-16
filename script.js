

function button(){
    alert("Thank You, we will contact you!");
}



// NAV


const navSlide = () => {
    const phone = document.querySelector('.transform-phone');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    

    phone.addEventListener('click', () => {
        // Toggle Now
        nav.classList.toggle('nav-active');

         //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else{
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 6 + 1.5}s`;
            }
        });
        
        
          //ikon animation
        phone.classList.toggle('toggle');
    });
}

navSlide();


// Our Service
let slider = document.getElementById('slider');
let box = document.getElementsByClassName('box');

// Maxium moovment
const maxcrollleft = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
    if(slider.scrollLeft > (maxcrollleft -1)){
        slider.scrollLeft -= maxcrollleft;
    } else{
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 10);

for(var i = 0; i < box.length; i++){
    box[i].addEventListener('mouseover', () => {
        clearInterval(play)
    });

    box[i].addEventListener('mouseout', () => {
        return play =setInterval(autoPlay, 10);
    });
}
// END Our Service


// NAV FADE
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('sticky', window.scrollY > 0)
})
// FUND NAv Fade
  
    

