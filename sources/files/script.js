if(sessionStorage.getItem("visited")!="ano"){
    alert("DISCLAIMER: This website is still being made, meaning that most stuff will 99% change/be filled");
}
sessionStorage.setItem("visited", "ano");

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
        SECRET_NAVBAR.classList.remove("aos-animate");
        SECRET_NAVBAR.style.opacity = "0";
        SECRET_NAVBAR.style.visibility = "hidden";
    }
}

const projects_digits = document.getElementById("project-digit"); //getting the parent of all circles
let selected_number = 1; //declaring variable needed to identify correct window

projects_img = document.getElementById("projects-img");
projects_h1 = document.getElementById("projects-h1");
projects_p = document.getElementById("projects-p");

const projects = { //all necessary data for projects
    1: {
        head: "Header numero uno",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    2: {
        head: "Header numero dos",
        body: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ea commodo consequat."
    },
    3: {
        head: "Header numero tres",
        body: "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    4: {
        head: "Header numero quatro",
        body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore eaque ipsa"
    }
};

// in the services tab with inputed number delete class from old circle, change variable and add class to new circle
function select_window(number){
    projects_digits.children[selected_number-1].classList.remove("project-digit-selected");
    
    selected_number = Number(number);

    projects_digits.children[selected_number-1].classList.add("project-digit-selected");
    set_window()
}

// in the services tab buttons to go right/left, adding(subtracting) number, changes class
function add_window(number){
    projects_digits.children[selected_number-1].classList.remove("project-digit-selected");

    if(selected_number+Number(number)==5){
        selected_number = 0;
    } else if(selected_number+Number(number)==0){
        selected_number = 5;
    }

    selected_number += Number(number);
    projects_digits.children[selected_number-1].classList.add("project-digit-selected");

    set_window()
}

// in the services tab sets the windows elements to its respectful content
function set_window(){
    projects_img.src = "sources/images/projects/"+selected_number.toString()+".webp";
    projects_h1.innerHTML = projects[selected_number].head;
    projects_p.innerHTML = projects[selected_number].body;
}

let opened_p = 0;
const faq_p = document.querySelectorAll("#faq-windows-container p"); //getting all paragraphs of all faqs
// open(close) window of faq
function window_faq(number){
        if(opened_p != 0){
        faq_p[opened_p-1].classList.toggle("show-p");
        faq_p[opened_p-1].nextElementSibling.style.rotate = "180deg";
    }

    if(opened_p != number){
        faq_p[number-1].classList.toggle("show-p");
        faq_p[number-1].nextElementSibling.style.rotate = "90deg";
        opened_p = number;
    }else{
        opened_p = 0;
    }
}