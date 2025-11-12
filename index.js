"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const lightmode = document.querySelector(".lightmode");

// lightmode.addEventListener('click', () => {
//     lightmode.classList.toggle('active');
// })

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// function to remove menu dropdown 
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// function to animate the project section
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// function to toogle Dark and Light Mode
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '🌙 Dark Mode';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '🌙 Dark Mode';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🔆 Light Mode';
      localStorage.setItem('theme', 'light');
    }
  });
