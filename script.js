const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');   
 // Add "fade-in" class when element is visible
    }
  });
});

const couponCards = document.querySelectorAll('.coupon-card');
couponCards.forEach((card) => {
  observer.observe(card); // Observe each coupon card for visibility changes
});
