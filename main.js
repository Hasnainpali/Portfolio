class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 8);
      this.type();
      this.isDeleting = false;
    }

    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // change color for data-text
      this.txtElement.innerHTML = `<span class="txt" >${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 100;

      if(this.isDeleting) {
        typeSpeed /= 2;
      }

      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 300;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }

  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);

  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }

document.addEventListener('DOMContentLoaded',function(){
   let toggleButton = document.getElementById('toggleButton');
   let menu = document.getElementById('navbarSupportedContent')

   toggleButton.addEventListener('click', function(){
     menu.classList.toggle('show')
   })

    let navLink = document.querySelectorAll('.navbar-nav a.nav-link');

     navLink.forEach(function(link){
      link.addEventListener('click', function(){
        if(menu.classList.toggle('show')){
          menu.classList.remove('show')
        }
      });
     });
});

$(document).ready(function(){
  // Vendor carousel
  $('.vendor-carousel').owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        992:{
            items:5
        },
        1200:{
            items:6
        }
    }
});


// Related carousel
$('.related-carousel').owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
});

})