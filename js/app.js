
// Tab variables
const tabPanels = document.querySelectorAll("[role=tabpanel]");
const tabButtons = document.querySelectorAll("[role=tab]");
const detailsButtons = document.querySelectorAll(".view-details");

// Modal variables
const dialog = document.querySelector(".modal");

// Creating Tab Functionality
console.log(tabButtons);
console.log(tabPanels);

// Creating Tab handler function
function handleTabClick(e) {
    // Hide all Tab Panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // Mark all tabs as unselected
    tabButtons.forEach(tab => {
        tab.ariaSelected = false;
    });
    // Mark the clicked tab as selected
    e.currentTarget.ariaSelected = true;

    // Find the associated tabpanel and show it

}

// Creating Modal handler function
function modalHandler(e) {

    
    dialog.showModal();
}


tabButtons.forEach(button => (button.addEventListener(`click`, handleTabClick)));

detailsButtons.forEach(button => (button.addEventListener(`click`, modalHandler)));
