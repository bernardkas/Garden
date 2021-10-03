

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
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 1.5}s`;
            }
        });
        
          //ikon animation
        phone.classList.toggle('toggle');
    });
  
    
}

navSlide();
