const SECRET_NAVBAR = document.getElementById("secret-navbar");
let Secret_navbar_visible = false;

const projects_digits = document.getElementById("project-digit");
let selected_number = 1;
const projects = {
    1: {
        head: "abc",
        body: "123"
    },
    2: {
        head: "bcd",
        body: "234"
    },
    3: {
        head: "cde",
        body: "345"
    },
    4: {
        head: "def",
        body: "456"
    }
};

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

function test(){
    console.log(selected_number);
    console.log(projects[selected_number].head);
    console.log(projects[selected_number].body);

    projects_digits.children[selected_number-1].classList.add("project-digit-selected");
}
function test1(number){
    projects_digits.children[selected_number-1].classList.remove("project-digit-selected");
    
    selected_number = number;
    test();
}
function test2(number){
    projects_digits.children[selected_number-1].classList.remove("project-digit-selected");

    if(selected_number+Number(number)==5){
        selected_number = 0;
    } else if(selected_number+Number(number)==0){
        selected_number = 5;
    }

    selected_number += Number(number);
    test();
}
console.log(selected_number);