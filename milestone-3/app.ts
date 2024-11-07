document.addEventListener("DOMContentLoaded", () => {
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    const addExperienceButton = document.getElementById("addExperience") as HTMLButtonElement;
    const experienceContainer = document.getElementById("experienceContainer") as HTMLElement;
    const addEducationButton = document.getElementById("addEducation") as HTMLButtonElement;
    const educationContainer = document.getElementById("educationContainer") as HTMLElement;
    const addAwardButton = document.getElementById("addAward") as HTMLButtonElement;
    const awardsContainer = document.getElementById("awardsContainer") as HTMLElement;
    const addLanguageButton = document.getElementById("addLanguage") as HTMLButtonElement;
    const languagesContainer = document.getElementById("languagesContainer") as HTMLElement;

    // Handle form submission to log and store user information
    resumeForm.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        // Capture form data
        const formData = new FormData(resumeForm);
        const personalInfo = {
            fullName: formData.get("fullName") as string,
            jobTitle: formData.get("jobTitle") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            linkedin: formData.get("linkedin") as string,
            summary: formData.get("summary") as string,
            skills: (formData.get("skills") as string).split(',').map(skill => skill.trim())
        };

        console.log("Personal Information:", personalInfo);
        // Continue to store or process data as needed
    });

    // Generic function to add a new entry section to a container
    function addSection(container: HTMLElement, content: string): void {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("entry", "mb-4", "p-4", "border", "rounded");
        sectionDiv.innerHTML = content;
        container.appendChild(sectionDiv);
    }

    // Add experience section dynamically
    addExperienceButton.addEventListener("click", () => {
        const experienceContent = `
            <label>Job Title:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Job Title">

            <label>Company:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Company">

            <label>Years:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Years (e.g., 2020-2022)">

            <label>Job Description:</label>
            <textarea class="w-full border p-2 mb-2 rounded" rows="3" placeholder="Describe your responsibilities and achievements"></textarea>
        `;
        addSection(experienceContainer, experienceContent);
    });

    // Add education section dynamically
    addEducationButton.addEventListener("click", () => {
        const educationContent = `
            <label>Institution Name:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Institution Name">

            <label>Degree:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Degree">

            <label>Years Attended:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Years (e.g., 2015-2019)">
        `;
        addSection(educationContainer, educationContent);
    });

    // Add award/certification section dynamically
    addAwardButton.addEventListener("click", () => {
        const awardContent = `
            <label>Award/Certification Title:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Title">

            <label>Institution/Organization:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Institution or Organization">

            <label>Date:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Date (e.g., May 2023)">
        `;
        addSection(awardsContainer, awardContent);
    });

    // Add language section dynamically
    addLanguageButton.addEventListener("click", () => {
        const languageContent = `
            <label>Language:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Language">

            <label>Proficiency Level:</label>
            <input type="text" class="w-full border p-2 mb-2 rounded" placeholder="Proficiency (e.g., Fluent, Beginner)">
        `;
        addSection(languagesContainer, languageContent);
    });
});
