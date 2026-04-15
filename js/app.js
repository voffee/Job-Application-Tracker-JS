
// Tab variables
const tabPanels = document.querySelectorAll("[role=tabpanel]");
const tabButtons = document.querySelectorAll("[role=tab]");
const detailsButtons = document.querySelectorAll(".view-details");
const tabs = document.querySelector(".tabs");

// Modal variables
const dialog = document.querySelector(".modal");
const modalApplyButton = dialog.querySelector(".apply-button");
const softwareJobDesc = `Software Engineering/Programming
        Design and develop front-end systems in our e-commerce platform with our development team.
        Collaborate with the back-end developers and designers to implement the product development roadmap.
        <br>
        <br>
        Skills and Characteristics:
        Self-motivated: You are expected to manage the different priorities of tasks assigned to you and manage your own time.
        Ownership: You are required to drive changes and improvements taking full ownership from idea to implementation.
        Responsibility: You are expected take responsibility together with the rest of the development team to develop and manage our software solutions long-term.
        <br>
        <br>
        Qualifications and Requirements:
        Excellent competence in JavaScript, Node.js, HTML5, CSS and jQuery. Competence is more important than working experience. A candidate would typically have a minimum of 3 years relevant working experience but exceptions can be made for outstanding candidates.
        Proficiency with HTML build tools such as Gulp, Webpack
        Proficient spoken and written English.
        <br>
        <br>
        Nice to have but not required:
        Experience with Docker or other container systems
        Experience in Linux systems.
        Experience in React.
        This is a permanent full time position. The job location is at BullionStar's HQ, 45 New Bridge Road Singapore 059398.
        <br>
        <br>
        Salary and Benefits
        The salary is dependent on your capability, experience and skills. The typical starting salary is SGD 5,000 - SGD 8,000 per month plus up to four month's bonus salary with a minimum bonus salary of one month.
        <br>
        <br>
        BullionStar furthermore offers reimbursement of medical bills and access to an employee health and fitness benefit program.`
const tradingJobDesc = `Design and develop front-end features for our trading platform, collaborating closely with back-end developers and UI/UX designers to deliver on our product roadmap.
        <br><br>
        Skills and Characteristics:
        Self-motivated with strong time management, a sense of ownership over your work from concept to deployment, and a team-oriented approach to maintaining and improving our software long-term.
        <br><br>
        Qualifications and Requirements:
        Strong competence in JavaScript, HTML5, CSS, and React. Typically 2+ years of relevant experience, though exceptional candidates will be considered. Familiarity with front-end build tools such as Webpack or Vite and proficient spoken and written English are required.
        <br><br>
        Nice to Have:
        Experience with TypeScript, REST APIs, or version control workflows in a team environment.
        <br><br>
        Position Details:
        Full-time, permanent role based at Horizon Trading Ltd.'s Singapore office.
        <br><br>
        Salary and Benefits:
        SGD 3,000  SGD 3,500 per month depending on experience, plus an annual bonus of up to three months' salary with a guaranteed minimum of one month. Benefits include medical reimbursement and a health and wellness stipend.`;

// Creating Tab Functionality

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
    const {id} = e.currentTarget;
    tabs.querySelector(`[aria-labelledby=${id}]`).hidden = false;
}

// Intersection Observer Variables
const modalSentinel = dialog.querySelector(".sentinel");

// Intersection Observer Callback Function
function obsCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        modalApplyButton.disabled = false;
        ob.unobserve(dialog.lastElementChild);
    }
}

// Intersection Observer
const ob = new IntersectionObserver(obsCallback, {
    root: dialog,
    threshold: 1,
});

// Creating Modal handler function
function modalHandler(e) {
    // Collecting data from event object
    const button = e.currentTarget;
    const card = button.closest(`.card`);
    const salary = card.querySelector(".job-salary :nth-child(1)").textContent;
    const compName = card.querySelector(".job-description :nth-child(2)").textContent;
    const jobName = card.querySelector(".job-description :nth-child(3)").textContent;

    let jobText;

    // Checking type of job
    switch(compName) {
        case "Goldstar Pte. Ltd.":
            jobText = softwareJobDesc;
            break;

        case "Horizon Trading Ltd.":
            jobText = tradingJobDesc;
            break;

        default:
            jobText = `NO JOB DESCRIPTION DETECTED`;
    }

    // Populating Modal
    dialog.innerHTML = `
    <p class="monteserrat-medium">${compName}</p>
    <p class="monteserrat-medium">${jobName}</p>
    <p class="monteserrat-medium">${salary}</p>
    <p class="open-sans-small">${jobText}</p>
    <button class="apply-button monteserrat-medium" disabled>Apply!</button>
    <div class="sentinel"></div>
    `
    dialog.showModal();
    const triggeredCard = e.currentTarget.closest(".card");
    tabPanels[1].appendChild(triggeredCard);
    // tabPanels[1].hidden = false;
    // console.log(tabPanels[1]);

    ob.observe(dialog.lastElementChild);

    const applyButton = dialog.querySelector(".apply-button");
    if (applyButton.disabled === false) {
                applyButton.addEventListener("click", () => {
                dialog.close();
                console.log("BUTTON ENABLED");
            });
    } else {
        console.log("BUTTON DISABLED");
    }
}


tabButtons.forEach(button => (button.addEventListener(`click`, handleTabClick)));

detailsButtons.forEach(button => (button.addEventListener(`click`, modalHandler)));
