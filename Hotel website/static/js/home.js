let currentSlide = 0;

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
  
    dropdown.addEventListener('click', function () {
      const dropdownContent = this.querySelector('.dropdown-content');
      
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
  
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
          dropdown.style.display = 'none';
        });
      }
    }
  });
  // Code for navbar toggler functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.getElementById('navbar-toggler_1');
    const menu = document.getElementById('navbar-menu_1');

    toggler.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
const slides = document.querySelectorAll('.carousel-slide');

// Initialize the first slide as active
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Move slide in direction (1 for next, -1 for previous)
function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

// Set initial slide
showSlide(currentSlide);

// Optional: Auto play feature
setInterval(() => {
    moveSlide(1);
}, 5000); // Change every 5 seconds
dateInput.setAttribute('data-placeholder', 'MM/DD/YYYY');
const dateInput = document.getElementById('dateInput');

        // Set a custom placeholder text
        dateInput.setAttribute('data-placeholder', 'MM/DD/YYYY');

        // Initial placeholder display
        dateInput.classList.add('placeholder-date');

// Initial placeholder display
dateInput.classList.add('placeholder-date');

// On focus, remove the placeholder style (but keep the text for now)
dateInput.addEventListener('focus', function () {
    if (!dateInput.value) {
        dateInput.classList.remove('placeholder-date');
    }
});

// On blur, if no date is picked, reset the placeholder
dateInput.addEventListener('blur', function () {
  if (!dateInput.value) {
      dateInput.classList.add('placeholder-date');
      dateInput.value = '';
  } else {
      dateInput.classList.remove('placeholder-date');
  }
});

// On change (user picks a date), remove the placeholder effect
dateInput.addEventListener('change', function () {
  if (dateInput.value) {
      dateInput.classList.remove('placeholder-date');
  }
});
function getYoutubeVideoID(url){
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length ==11 ) ? match[2] : null;

  }
function replaceThumbnailWithVideo(thumbnailElement, videoUrl){
  const videoId = getYoutubeVideoIDvid(videoUrl);
  if (!videoId){
    console.error("Invalid Youtube URL");
    return;
  }
  const iframe = document.createDocumentFragment('iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
  iframe.width = thumbnailElement.offsetWidth;
  iframe.height = thumbnailElement.offsetHeight;
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullScrenn = true;
   
  thumbnailElement.parentNode.replaceChild(iframe, thumbnailElement);

}

document.addEventListener('DOMContentLoaded', function(){
  const thumbnail = document.querySelector('.video-thumbnail');
  const videoUrl = 'https://www.youtube.com/shorts/irztCcv7I00'

  thumbnail.addEventListener('click', function(e){
    e.preventDefault();
    replaceThumbnailWithVideo(this, videoUrl);
  })
})