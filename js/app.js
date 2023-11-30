/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Get the navbar__list element
const navbarList = document.getElementById("navbar__list");
// Get all section elements
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  // Retrieve the section's id and data-nav attributes
  const sectionId = section.id;
  const sectionDataNav = section.getAttribute("data-nav");

  // Create a list item element
  const listItem = document.createElement("li");

  // Create an anchor element
  const anchor = document.createElement("a");

  // Set textContent to the value of the section's data-nav attribute
  anchor.textContent = sectionDataNav;

  // Set href to the value of the section's id attribute
  anchor.href = `#${sectionId}`;

  // Add the menu__link class to the anchor element
  anchor.classList.add("menu__link");

  // Add a click event listener to the anchor element
  anchor.addEventListener("click", (event) => {
    // Prevent the default click behavior (navigation)
    event.preventDefault();

    // Scroll to the corresponding section smoothly
    section.scrollIntoView({ behavior: "smooth" });
  });

  // Append the anchor element to the list item element
  listItem.append(anchor);

  // Append the list item element to the navbar__list element
  navbarList.appendChild(listItem);
});
// Get all anchor elements in navbar
const allAnchors = document.querySelectorAll(".menu__link");
// Add window scroll event listener
window.addEventListener("scroll", () => {
  // Iterate over each section
  sections.forEach((section, index) => {
    // Retrieve the section's position on the page
    const sectionBounds = section.getBoundingClientRect();

    // Remove existing active class from  section
    section.classList.remove("nav-active");

    // Check if the section is visible in the viewport
    if (
      sectionBounds.top >= 0 &&
      sectionBounds.left >= 0 &&
      sectionBounds.bottom <= window.innerHeight &&
      sectionBounds.right <= window.innerWidth
    ) {
      // Add the active class to the section
      section.classList.add("nav-active");

      // adds active class if true, removes active class if false
      allAnchors.forEach((anchor, anchorIndex) => {
        if (index === anchorIndex) {
          anchor.classList.add("nav-active");
        } else {
          anchor.classList.remove("nav-active");
        }
      });
    }
  });
});
