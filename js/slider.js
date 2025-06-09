document.addEventListener('DOMContentLoaded', function() {
  
  const sliderContainer = document.querySelector('.slider-container');
  const prevBtn = document.querySelector('.slider-control.prev');
  const nextBtn = document.querySelector('.slider-control.next');
  const dots = Array.from(document.querySelectorAll('.slider-dots .dot'));
  
  if (!sliderContainer || !prevBtn || !nextBtn || !dots.length) return;
  
  let currentPage = 0;
  const totalPages = Math.ceil(document.querySelectorAll('.eu-recipe-card').length / 3);
  const cardWidth = document.querySelector('.eu-recipe-card').offsetWidth;
  const gapWidth = 30; 
  
  
  updateDots(0);
  
  
  prevBtn.addEventListener('click', function() {
      if (currentPage > 0) {
          currentPage--;
      } else {
          currentPage = totalPages - 1;
      }
      updateSlider();
  });
  

  nextBtn.addEventListener('click', function() {
      if (currentPage < totalPages - 1) {
          currentPage++;
      } else {
          currentPage = 0;
      }
      updateSlider();
  });
  

  dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
          currentPage = index;
          updateSlider();
      });
  });
  

  let touchStartX = 0;
  let touchEndX = 0;
  
  sliderContainer.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  
  sliderContainer.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
  }, { passive: true });
  
  function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {

          if (currentPage < totalPages - 1) {
              currentPage++;
              updateSlider();
          }
      } else if (touchEndX > touchStartX + swipeThreshold) {

          if (currentPage > 0) {
              currentPage--;
              updateSlider();
          }
      }
  }
  

  function updateSlider() {

      const slideWidth = cardWidth + gapWidth;
      const offset = currentPage * slideWidth * 3; 
      
 
      sliderContainer.style.transform = `translateX(-${offset}px)`;
      

      updateDots(currentPage);
      

      announceSlideChange();
  }
  
  function updateDots(activeIndex) {
      dots.forEach((dot, index) => {
          if (index === activeIndex) {
              dot.classList.add('active');
          } else {
              dot.classList.remove('active');
          }
      });
  }
  
  function announceSlideChange() {
      let announcement = document.getElementById('slider-announcement');
      if (!announcement) {
          announcement = document.createElement('div');
          announcement.id = 'slider-announcement';
          announcement.className = 'visually-hidden';
          announcement.setAttribute('aria-live', 'polite');
          document.body.appendChild(announcement);
      }
      
      announcement.textContent = `Showing page ${currentPage + 1} of ${totalPages}`;
  }
  

  window.addEventListener('resize', debounce(function() {

      const newCardWidth = document.querySelector('.eu-recipe-card').offsetWidth;
      const slideWidth = newCardWidth + gapWidth;
      const offset = currentPage * slideWidth * 3;
      
      sliderContainer.style.transform = `translateX(-${offset}px)`;
  }, 250));
  

  function debounce(func, wait) {
      let timeout;
      return function() {
          const context = this;
          const args = arguments;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), wait);
      };
  }
});
