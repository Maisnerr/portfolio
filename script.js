function scrollToSection(id) {
    console.log(id);
    console.log(typeof id);
    const el = document.getElementById(id);
    const offset = 78; 
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
}

window.addEventListener('scroll', () => {
  const el = document.getElementById("back-top-button");
  if (window.scrollY != 0) {
    el.classList.add("show");
  } else {
    el.classList.remove("show");
  }
});

