document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    var addExperienceButton = document.getElementById("addExperience");
    var experienceContainer = document.getElementById("experienceContainer");
    var addEducationButton = document.getElementById("addEducation");
    var educationContainer = document.getElementById("educationContainer");
    var addAwardButton = document.getElementById("addAward");
    var awardsContainer = document.getElementById("awardsContainer");
    var addLanguageButton = document.getElementById("addLanguage");
    var languagesContainer = document.getElementById("languagesContainer");
    // Handle form submission to log and store user information
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Capture form data
        var formData = new FormData(resumeForm);
        var personalInfo = {
            fullName: formData.get("fullName"),
            jobTitle: formData.get("jobTitle"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            linkedin: formData.get("linkedin"),
            summary: formData.get("summary"),
            skills: formData.get("skills").split(',').map(function (skill) { return skill.trim(); })
        };
        console.log("Personal Information:", personalInfo);
        // Continue to store or process data as needed
    });
    // Generic function to add a new entry section to a container
    function addSection(container, content) {
        var sectionDiv = document.createElement("div");
        sectionDiv.classList.add("entry", "mb-4", "p-4", "border", "rounded");
        sectionDiv.innerHTML = content;
        container.appendChild(sectionDiv);
    }
    // Add experience section dynamically
    addExperienceButton.addEventListener("click", function () {
        var experienceContent = "\n            <label>Job Title:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Job Title\">\n\n            <label>Company:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Company\">\n\n            <label>Years:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Years (e.g., 2020-2022)\">\n\n            <label>Job Description:</label>\n            <textarea class=\"w-full border p-2 mb-2 rounded\" rows=\"3\" placeholder=\"Describe your responsibilities and achievements\"></textarea>\n        ";
        addSection(experienceContainer, experienceContent);
    });
    // Add education section dynamically
    addEducationButton.addEventListener("click", function () {
        var educationContent = "\n            <label>Institution Name:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Institution Name\">\n\n            <label>Degree:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Degree\">\n\n            <label>Years Attended:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Years (e.g., 2015-2019)\">\n        ";
        addSection(educationContainer, educationContent);
    });
    // Add award/certification section dynamically
    addAwardButton.addEventListener("click", function () {
        var awardContent = "\n            <label>Award/Certification Title:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Title\">\n\n            <label>Institution/Organization:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Institution or Organization\">\n\n            <label>Date:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Date (e.g., May 2023)\">\n        ";
        addSection(awardsContainer, awardContent);
    });
    // Add language section dynamically
    addLanguageButton.addEventListener("click", function () {
        var languageContent = "\n            <label>Language:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Language\">\n\n            <label>Proficiency Level:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Proficiency (e.g., Fluent, Beginner)\">\n        ";
        addSection(languagesContainer, languageContent);
    });
});
