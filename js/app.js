/**
 * Define Global Variables
 * 
*/
const navigation = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");


// build the nav
const buildNav = () =>  {
    let navi = '';
 // creating elements using foreach loop.
    sections.forEach(section => {

        const secID = section.id;
        const sectionDatasetNav = section.dataset.nav; 
        navi += `<li><a href="#${secID}"  class="menu__link"> ${sectionDatasetNav} </a>`;
    });
   // add elements to navigation
    navigation.innerHTML = navi;
};

 buildNav();

// Add class 'active' to section when near top of viewport

const sectionInViewport = (view) => {
    // determine if section is near top of viewport
    let offset = view.getBoundingClientRect();
    return offset.top <= 150 && offset.bottom >= 150;
};

const addActiveClass = () => {
    // function to add active class to viewed section
    for (section of sections) {
        if (sectionInViewport(section)) {
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
            }
        } else {
            section.classList.remove("your-active-class");
        }
    }
};

// Scroll smoothly to section on anchor click

const scrollFunction = () => {
    document.querySelectorAll(".menu__link").forEach((anchor) => {
        // selects all anchors with class='menu__link'
        anchor.addEventListener("click", function (prev) {
            prev.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};
/* End Main Functions */

//Get the button:
 mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {btnScrollFunction()};
 
 function btnScrollFunction() {
   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   } 
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 
}
// Scroll to section on link click

scrollFunction();

// Set sections as active

document.addEventListener("scroll", addActiveClass);

/*Button helping code
*https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
*/