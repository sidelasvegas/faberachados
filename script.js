const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});

const couponCards = document.querySelectorAll('.coupon-card');
couponCards.forEach((card) => {
  observer.observe(card);
});
