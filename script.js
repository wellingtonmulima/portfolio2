function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById("contact-form").addEventListener("submit",function(e){
    e.preventDefault();

    alert("Thank you for reaching out will get back to you soon");
    this.reset();
});