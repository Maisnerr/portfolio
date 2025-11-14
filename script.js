// Smoothly scrolls down to a section of given ID
function scrollToSection(id) {
    const el = document.getElementById(id);
    const offset = 78; 
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
}

// Shows or hides the scroll-to-top button based on scroll position
function showScrollButton() {
  window.addEventListener('scroll', () => {
  const el = document.getElementById("back-top-button");
  if (window.scrollY != 0) {
    el.classList.add("show");
  } else {
    el.classList.remove("show");
  }
});
}

// Adjusts visibility of "See More" button based on device
function seeMoreButtonVisibility() {
  const el = document.getElementsByClassName("introduction-button")[0];
  if (window.innerWidth <= 768) {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}

// Initialization function
function onStart(){
  showScrollButton(); // Start showing scroll button
  seeMoreButtonVisibility(); // Set initial visibility of see more button
}
onStart(); // Call initialization function
