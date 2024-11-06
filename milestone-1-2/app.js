document.addEventListener("DOMContentLoaded", function () {
    // Function to capture and log Personal Information data
    function logPersonalInfo() {
        var fullName = document.getElementById("fullName").value;
        var jobTitle = document.getElementById("jobTitle").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var linkedin = document.getElementById("linkedin").value;
        console.log("Full Name:", fullName);
        console.log("Job Title:", jobTitle);
        console.log("Email:", email);
        console.log("Phone Number:", phone);
        console.log("LinkedIn:", linkedin);
    }
    // Call this function whenever needed (e.g., while generating the PDF)
    // logPersonalInfo();
});
document.addEventListener("DOMContentLoaded", function () {
    var addExperienceButton = document.getElementById("addExperience");
    var experienceContainer = document.getElementById("experienceContainer");
    // Function to add a new experience section
    function addExperience() {
        var experienceDiv = document.createElement("div");
        experienceDiv.classList.add("experience-entry", "mb-4", "p-4", "border", "rounded");
        experienceDiv.innerHTML = "\n            <label>Job Title:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Job Title\">\n\n            <label>Company:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Company\">\n\n            <label>Years:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Years (e.g., 2020-2022)\">\n\n            <label>Job Description:</label>\n            <textarea class=\"w-full border p-2 mb-2 rounded\" rows=\"3\" placeholder=\"Describe your responsibilities and achievements\"></textarea>\n        ";
        experienceContainer.appendChild(experienceDiv);
    }
    // Event listener for the "Add Experience" button
    addExperienceButton.addEventListener("click", addExperience);
});
document.addEventListener("DOMContentLoaded", function () {
    var addEducationButton = document.getElementById("addEducation");
    var educationContainer = document.getElementById("educationContainer");
    // Function to add a new education entry
    function addEducation() {
        var educationDiv = document.createElement("div");
        educationDiv.classList.add("education-entry", "mb-4", "p-4", "border", "rounded");
        educationDiv.innerHTML = "\n            <label>Institution Name:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Institution Name\">\n\n            <label>Degree:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Degree\">\n\n            <label>Years Attended:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Years (e.g., 2015-2019)\">\n        ";
        educationContainer.appendChild(educationDiv);
    }
    // Event listener for the "Add Education" button
    addEducationButton.addEventListener("click", addEducation);
});
document.addEventListener("DOMContentLoaded", function () {
    var addAwardButton = document.getElementById("addAward");
    var awardsContainer = document.getElementById("awardsContainer");
    // Function to add a new award or certification entry
    function addAward() {
        var awardDiv = document.createElement("div");
        awardDiv.classList.add("award-entry", "mb-4", "p-4", "border", "rounded");
        awardDiv.innerHTML = "\n            <label>Award/Certification Title:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Title\">\n\n            <label>Institution/Organization:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Institution or Organization\">\n\n            <label>Date:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Date (e.g., May 2023)\">\n        ";
        awardsContainer.appendChild(awardDiv);
    }
    // Event listener for the "Add Award/Certification" button
    addAwardButton.addEventListener("click", addAward);
});
document.addEventListener("DOMContentLoaded", function () {
    var addLanguageButton = document.getElementById("addLanguage");
    var languagesContainer = document.getElementById("languagesContainer");
    // Function to add a new language entry
    function addLanguage() {
        var languageDiv = document.createElement("div");
        languageDiv.classList.add("language-entry", "mb-4", "p-4", "border", "rounded");
        languageDiv.innerHTML = "\n            <label>Language:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Language\">\n\n            <label>Proficiency Level:</label>\n            <input type=\"text\" class=\"w-full border p-2 mb-2 rounded\" placeholder=\"Proficiency (e.g., Fluent, Beginner)\">\n        ";
        languagesContainer.appendChild(languageDiv);
    }
    // Event listener for the "Add Language" button
    addLanguageButton.addEventListener("click", addLanguage);
});
