document.addEventListener("DOMContentLoaded", () => {
    // Function to capture and log Personal Information data
    function logPersonalInfo() {
        const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
        const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;

        console.log("Full Name:", fullName);
        console.log("Job Title:", jobTitle);
        console.log("Email:", email);
        console.log("Phone Number:", phone);
        console.log("LinkedIn:", linkedin);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const addExperienceButton = document.getElementById("addExperience") as HTMLButtonElement;
    const experienceContainer = document.getElementById("experienceContainer") as HTMLElement;

    // Function to add a new experience section
    function addExperience() {
        const experienceDiv = document.createElement("div");
        experienceDiv.classList.add("experience-entry", "mb-4", "p-4", "border", "rounded");

        experienceDiv.innerHTML = `
            <label>Job Title:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Job Title">

            <label>Company:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Company">

            <label>Years:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Years (e.g., 2020-2022)">

            <label>Job Description:</label>
            <textarea class="w-full border p-2 mb-2 rounded" rows="3" placeholder="Describe your responsibilities and achievements"></textarea>
        `;

        experienceContainer.appendChild(experienceDiv);
    }

    // Event listener for the "Add Experience" button
    addExperienceButton.addEventListener("click", addExperience);
});


document.addEventListener("DOMContentLoaded", () => {
    const addEducationButton = document.getElementById("addEducation") as HTMLButtonElement;
    const educationContainer = document.getElementById("educationContainer") as HTMLElement;

    // Function to add a new education entry
    function addEducation() {
        const educationDiv = document.createElement("div");
        educationDiv.classList.add("education-entry", "mb-4", "p-4", "border", "rounded");

        educationDiv.innerHTML = `
            <label>Institution Name:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Institution Name">

            <label>Degree:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Degree">

            <label>Years Attended:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Years (e.g., 2015-2019)">
        `;

        educationContainer.appendChild(educationDiv);
    }

    // Event listener for the "Add Education" button
    addEducationButton.addEventListener("click", addEducation);
});


document.addEventListener("DOMContentLoaded", () => {
    const addAwardButton = document.getElementById("addAward") as HTMLButtonElement;
    const awardsContainer = document.getElementById("awardsContainer") as HTMLElement;

    // Function to add a new award or certification entry
    function addAward() {
        const awardDiv = document.createElement("div");
        awardDiv.classList.add("award-entry", "mb-4", "p-4", "border", "rounded");

        awardDiv.innerHTML = `
            <label>Award/Certification Title:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Title">

            <label>Institution/Organization:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Institution or Organization">

            <label>Date:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Date (e.g., May 2023)">
        `;

        awardsContainer.appendChild(awardDiv);
    }

    // Event listener for the "Add Award/Certification" button
    addAwardButton.addEventListener("click", addAward);
});


document.addEventListener("DOMContentLoaded", () => {
    const addLanguageButton = document.getElementById("addLanguage") as HTMLButtonElement;
    const languagesContainer = document.getElementById("languagesContainer") as HTMLElement;

    // Function to add a new language entry
    function addLanguage() {
        const languageDiv = document.createElement("div");
        languageDiv.classList.add("language-entry", "mb-4", "p-4", "border", "rounded");

        languageDiv.innerHTML = `
            <label>Language:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Language">

            <label>Proficiency Level:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Proficiency (e.g., Fluent, Beginner)">
        `;

        languagesContainer.appendChild(languageDiv);
    }

    // Event listener for the "Add Language" button
    addLanguageButton.addEventListener("click", addLanguage);
});
