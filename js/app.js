
const tabPanels = document.querySelectorAll("[role=tabpanel]");
const tabButtons = document.querySelectorAll("[role=tab]");

// Creating Tab Functionality
console.log(tabButtons);
console.log(tabPanels);

// Creating handler function

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

tabButtons.forEach(button => (button.addEventListener(`click`, handleTabClick)));