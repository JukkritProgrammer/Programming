let Nav_List = document.getElementById("nav-list");
let Bar = document.getElementById("Bar");
let Close = document.getElementById("Close");
let isOpen = false;

let Navbar = document.getElementById("navbar");
let sticky = Navbar.offsetTop;

let Modal = document.getElementById("Modal");
let Modal_Img = document.getElementById("Modal_Img");
let Modal_Close = document.getElementById("Modal_Close");

function Toggle() {
    if(!isOpen) {
        isOpen = true;
        Nav_List.style.height = "300px";
        Bar.style.display = "none";
        Close.style.display = "block";
    }
    else {
        isOpen = false;
        Nav_List.style.height = "0px";
        Bar.style.display = "block";
        Close.style.display = "none";
    }
}

function openModal() {
    Modal.style.display = "flex";
}

function closeModal() {
    Modal.style.display = "none";
}

window.addEventListener("scroll", function() {
    if (this.document.documentElement.scrollTop >= 140) {
        Navbar.classList.add("sticky");
    } else if (this.document.documentElement.scrollTop <= 0) {
        Navbar.classList.remove("sticky");
    }
});

window.addEventListener("click", function(event) {
    if (event.target == Modal) {
        closeModal();
    }
});


Bar.onclick = Toggle;
Close.onclick = Toggle;
Modal_Img.onclick = openModal;
Modal_Close.onclick = closeModal;