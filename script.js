const SECRET_NAVBAR = document.getElementById("secret-navbar");
let Secret_navbar_visible = false;

// Enable(disable) Navbar menu on mobile 
function switch_secret_navbar(){ 
    Secret_navbar_visible = !Secret_navbar_visible;
    console.log(Secret_navbar_visible);

    if(Secret_navbar_visible){
        SECRET_NAVBAR.classList.add("aos-animate")
        SECRET_NAVBAR.style.opacity = "1";
        SECRET_NAVBAR.style.visibility = "visible";
    }else{
        SECRET_NAVBAR.classList.remove("aos-animate")
        SECRET_NAVBAR.style.opacity = "0";
        SECRET_NAVBAR.style.visibility = "hidden";
    }
}

// Smoothly scrolls down to a section of given ID
function scrollToSection(id) {
    const el = document.getElementById(id);
    const offset = 0; 
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
}
