const SECRET_NAVBAR = document.getElementById("secret-navbar");
let Secret_navbar_visible = false;

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