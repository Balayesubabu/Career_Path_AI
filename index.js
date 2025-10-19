// CareerPath AI logic
document.getElementById("careerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const skill = document.getElementById("skills").value;
  const interest = document.getElementById("interests").value;
  const tool = document.getElementById("tools").value;

  const resultDiv = document.getElementById("result");
  const roleEl = document.getElementById("role");
  const descEl = document.getElementById("description");
  const skillsList = document.getElementById("skillsList");
  const roadmap = document.getElementById("roadmap");

  let role = "";
  let description = "";
  let skillsNeeded = [];
  let roadmapSteps = [];

  // Matching logic
  if (skill === "web" || tool === "vscode" || interest === "creative") {
    role = "Frontend Developer";
    description = "You enjoy creating visually appealing, interactive, and responsive websites.";
    skillsNeeded = ["HTML", "CSS", "JavaScript", "React", "Responsive Design"];
    roadmapSteps = ["Master JS fundamentals", "Learn React", "Practice building projects", "Host portfolio on GitHub"];
  } else if (skill === "data" || tool === "excel" || interest === "numbers") {
    role = "Data Analyst";
    description = "You love finding patterns and insights from raw data.";
    skillsNeeded = ["Python", "Excel", "SQL", "Power BI", "Statistics"];
    roadmapSteps = ["Learn Python for data analysis", "Master SQL & Excel", "Build dashboards", "Work on real datasets"];
  } else if (skill === "design" || tool === "figma" || interest === "visuals") {
    role = "UI/UX Designer";
    description = "You’re passionate about designing clean and engaging user experiences.";
    skillsNeeded = ["Figma", "Wireframing", "User Research", "Prototyping"];
    roadmapSteps = ["Learn Figma", "Study UX principles", "Design mockups", "Build a design portfolio"];
  } else if (skill === "ai" || tool === "python" || interest === "logic") {
    role = "AI / Machine Learning Engineer";
    description = "You enjoy solving problems using data and intelligent algorithms.";
    skillsNeeded = ["Python", "Machine Learning", "Pandas", "TensorFlow"];
    roadmapSteps = ["Learn Python", "Study ML concepts", "Implement models", "Build AI-based projects"];
  } else if (skill === "testing" || tool === "selenium" || interest === "quality") {
    role = "Software Test Engineer";
    description = "You’re focused on ensuring quality and reliability in applications.";
    skillsNeeded = ["Manual Testing", "Selenium", "Postman", "Automation Frameworks"];
    roadmapSteps = ["Learn testing concepts", "Use Selenium & Postman", "Write test cases", "Automate test workflows"];
  } else {
    role = "Technology Enthusiast";
    description = "Explore more domains to find what excites you — web, data, design, or AI!";
    skillsNeeded = ["Basic programming", "Communication", "Analytical thinking"];
    roadmapSteps = ["Experiment with mini projects", "Take coding challenges", "Explore free courses online"];
  }

  // Render results
  roleEl.textContent = role;
  descEl.textContent = description;
  skillsList.innerHTML = skillsNeeded.map((s) => `<li>${s}</li>`).join("");
  roadmap.innerHTML = roadmapSteps.map((s) => `<li>${s}</li>`).join("");
  resultDiv.classList.remove("hidden");
});

// PDF download
document.getElementById("downloadBtn").addEventListener("click", function () {
  const content = document.getElementById("result").innerHTML;
  const careerReport = `
    <html><head><title>Career Report</title></head><body>
    <h1>CareerPath AI Report</h1>${content}</body></html>`;
  const blob = new Blob([careerReport], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "CareerPath_AI_Report.html";
  link.click();
});
