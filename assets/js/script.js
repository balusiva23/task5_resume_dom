// Create <header> element
const header = document.createElement('header');
header.style.width = '50%';

// Create <div> element with class "header"
const headerDiv = document.createElement('div');
headerDiv.classList.add('header');

// Create <img> element
const img = document.createElement('img');
img.src = 'assets/user.jpg';
img.alt = 'profile';

// Append <img> to <div class="header">
headerDiv.appendChild(img);

// Create <div> element with class "heading"
const headingDiv = document.createElement('div');
headingDiv.classList.add('heading');

// Create <div> element with class "title"
const titleDiv = document.createElement('div');
titleDiv.classList.add('title');

// Create <h1> element
const h1 = document.createElement('h1');
h1.textContent = 'BRIAN DUDEY';

// Append <h1> to <div class="title">
titleDiv.appendChild(h1);

// Append <div class="title"> to <div class="heading">
headingDiv.appendChild(titleDiv);

// Append <div class="heading"> to <div class="header">
headerDiv.appendChild(headingDiv);

// Append <div class="header"> to <header>
header.appendChild(headerDiv);

// Create <div> element with class "sub-heading"
const subHeadingDiv = document.createElement('div');
subHeadingDiv.classList.add('sub-heading');

// Create <h3> element
const h3 = document.createElement('h3');
h3.textContent = 'N. Damen, Chicago 999999|999-999-9999|hello@kickresume.com|www.kickresume.com';

// Append <h3> to <div class="sub-heading">
subHeadingDiv.appendChild(h3);

// Append <div class="sub-heading"> to <header>
header.appendChild(subHeadingDiv);

// Create <hr> element
const hr = document.createElement('hr');

// Append <hr> to <header>
header.appendChild(hr);



// Create <main> element
const main = document.createElement('main');

// Append <main> to <body>
document.body.appendChild(main);
// Create <section> element with class "section1"
const section1 = document.createElement('section');
section1.classList.add('section1');

// Create <div> element with class "section_container"
const sectionContainer = document.createElement('div');
sectionContainer.classList.add('section_container');

// Create <div> element with class "profile"
const profileDiv = document.createElement('div');
profileDiv.classList.add('profile');

// Create <i> element with class "fa-solid fa-user" and "profile_picture"
const profileIcon = document.createElement('i');
profileIcon.classList.add('fa-solid', 'fa-user', 'profile_picture');

// Create <h1> element with inline style
const profileHeading = document.createElement('h1');
profileHeading.textContent = 'Profile';
profileHeading.style.color = '#565656';
profileHeading.style.fontSize = '30px';

// Append <i> and <h1> to <div class="profile">
profileDiv.appendChild(profileIcon);
profileDiv.appendChild(profileHeading);

// Create <p> element
const profileText = document.createElement('p');
profileText.innerHTML = `innovative optimized solution seeker. Excited to be <br> at the deployment
                         phase of my new career as a <br> web developer. I am ambitious, adventurous, <br>
                         assiduous, animated, and an alliteration advocate.`;

// Append <div class="profile"> and <p> to <div class="section_container">
sectionContainer.appendChild(profileDiv);
sectionContainer.appendChild(profileText);

// Append <div class="section_container"> to <section class="section1">
section1.appendChild(sectionContainer);

// Create <div> element with class "section_container2"
const sectionContainer2 = document.createElement('div');
sectionContainer2.classList.add('section_container2');

// Create <div> element with class "skills"
const skillsDiv = document.createElement('div');
skillsDiv.classList.add('skills');

// Create <i> element with class "fa-solid fa-flask"
const skillsIcon = document.createElement('i');
skillsIcon.classList.add('fa-solid', 'fa-flask');

// Create <h1> element with inline style
const skillsHeading = document.createElement('h1');
skillsHeading.textContent = 'Skills';
skillsHeading.style.color = '#565656';
skillsHeading.style.fontSize = '30px';

// Append <i> and <h1> to <div class="skills">
skillsDiv.appendChild(skillsIcon);
skillsDiv.appendChild(skillsHeading);

// Append <div class="skills"> to <div class="section_container2">
sectionContainer2.appendChild(skillsDiv);

// Create <h3> element with class "sub-heading2"
const technicalSkillsHeading = document.createElement('h3');
technicalSkillsHeading.classList.add('sub-heading2');
technicalSkillsHeading.textContent = 'Technical Skills';

// Append <h3 class="sub-heading2"> to <div class="section_container2">
sectionContainer2.appendChild(technicalSkillsHeading);

// Create <div> element with class "section_container2_skills"
const skillsContainer = document.createElement('div');
skillsContainer.classList.add('section_container2_skills');

// Create an array of technical skills data
const technicalSkills = [
  { name: 'JavaScript', range: 'javaScript' },
  { name: 'CSS', range: 'css' },
  { name: 'HTML', range: 'html' },
  { name: 'React', range: 'react' },
  { name: 'Redux', range: 'redux' },
  { name: 'Mongo', range: 'mongo' },
  { name: 'Deployment', range: 'deployment' }
];

// Iterate over the technical skills data
technicalSkills.forEach((skill) => {
  // Create <div> element with class corresponding to the skill
  const skillDiv = document.createElement('div');
  skillDiv.classList.add(skill.range);
  skillDiv.style.display = 'flex';
  skillDiv.style.justifyContent = 'space-between';

  // Create <h3> element with inline style
  const skillHeading = document.createElement('h3');
  skillHeading.textContent = skill.name;
  skillHeading.style.padding = '5px 0';

  // Create <input> element with type "range" and name corresponding to the skill
  const skillRange = document.createElement('input');
  skillRange.type = 'range';
  skillRange.name = skill.range;

  // Append <h3> and <input> to the skill <div>
  skillDiv.appendChild(skillHeading);
  skillDiv.appendChild(skillRange);

  // Append the skill <div> to <div class="section_container2_skills">
  skillsContainer.appendChild(skillDiv);
});

// Append <div class="section_container2_skills"> to <div class="section_container2">
sectionContainer2.appendChild(skillsContainer);

// Create <h3> element with class "sub-heading2"
const additionalSkillsHeading = document.createElement('h3');
additionalSkillsHeading.classList.add('sub-heading2');
additionalSkillsHeading.textContent = 'Additional Skills';

// Append <h3 class="sub-heading2"> to <div class="section_container2">
sectionContainer2.appendChild(additionalSkillsHeading);

// Create <div> element with class "wrapper2"
const additionalSkillsContainer = document.createElement('div');
additionalSkillsContainer.classList.add('wrapper2');

// Create an array of additional skills data
const additionalSkills = [
  { name: 'Project Management', range: 'projectManagement' },
  { name: 'Recruitment', range: 'recruitment' },
  { name: 'Business Development', range: 'businessDevelopment' },
  { name: 'Editing', range: 'editing' },
  { name: 'Fundraising', range: 'fundraising' }
];

// Iterate over the additional skills data
additionalSkills.forEach((skill) => {
  // Create <div> element with class corresponding to the skill
  const skillDiv = document.createElement('div');
  skillDiv.classList.add(skill.range);
  skillDiv.style.display = 'flex';
  skillDiv.style.justifyContent = 'space-between';

  // Create <h3> element with inline style
  const skillHeading = document.createElement('h3');
  skillHeading.textContent = skill.name;
  skillHeading.style.padding = '5px 0';

  // Create <input> element with type "range" and name corresponding to the skill
  const skillRange = document.createElement('input');
  skillRange.type = 'range';
  skillRange.name = skill.range;

  // Append <h3> and <input> to the skill <div>
  skillDiv.appendChild(skillHeading);
  skillDiv.appendChild(skillRange);

  // Append the skill <div> to <div class="wrapper2">
  additionalSkillsContainer.appendChild(skillDiv);
});

// Append <div class="wrapper2"> to <div class="section_container2">
sectionContainer2.appendChild(additionalSkillsContainer);

// Append <div class="section_container2"> to <section class="section1">
section1.appendChild(sectionContainer2);

// Create <div> element with class "section_container3"
const sectionContainer3 = document.createElement('div');
sectionContainer3.classList.add('section_container3');

// Create <div> element with class "workExperience"
const workExperienceDiv = document.createElement('div');
workExperienceDiv.classList.add('workExperience');

// Create <i> element with class "fa-solid fa-briefcase"
const workExperienceIcon = document.createElement('i');
workExperienceIcon.classList.add('fa-solid', 'fa-briefcase');

// Create <h1> element with inline style
const workExperienceHeading = document.createElement('h1');
workExperienceHeading.textContent = 'Work experience';
workExperienceHeading.style.color = '#565656';
workExperienceHeading.style.fontSize = '30px';

// Append <i> and <h1> to <div class="workExperience">
workExperienceDiv.appendChild(workExperienceIcon);
workExperienceDiv.appendChild(workExperienceHeading);

// Append <div class="workExperience"> to <div class="section_container3">
sectionContainer3.appendChild(workExperienceDiv);

// Create <div> element with class "workExperience-header"
const workExperienceHeader = document.createElement('div');
workExperienceHeader.classList.add('workExperience-header');

// Create <h3> element
const jobTitle = document.createElement('h3');
jobTitle.textContent = 'Event Manager';

// Create <span> element with class "date"
const jobDate = document.createElement('span');
jobDate.classList.add('date');
jobDate.textContent = '03/2014-02/2017';

// Append <h3> and <span> to <div class="workExperience-header">
workExperienceHeader.appendChild(jobTitle);
workExperienceHeader.appendChild(jobDate);

// Create <p> element with inline style
const jobLocation = document.createElement('p');
jobLocation.textContent = 'C3 Presents, Washington DC';
jobLocation.style.padding = '0 0 10px 0';

// Create <ul> element with class "section_container3_ul"
const jobDescriptionList = document.createElement('ul');
jobDescriptionList.classList.add('section_container3_ul');

// Create an array of job descriptions
const jobDescriptions = [
  'Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation.',
  'Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and the company\'s largest civic event to date, the United State of Women.',
  'Exercise fiscal control over budget creation, tracking, and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.'
];

// Iterate over the job descriptions
jobDescriptions.forEach((description) => {
  // Create <li> element
  const jobDescription = document.createElement('li');

  // Create <p> element
  const jobDescriptionText = document.createElement('p');
  jobDescriptionText.innerHTML = description;

  // Append <p> to <li>
  jobDescription.appendChild(jobDescriptionText);

  // Append <li> to <ul class="section_container3_ul">
  jobDescriptionList.appendChild(jobDescription);
});

// Append <div class="workExperience-header">, <p>, and <ul> to <div class="section_container3">
sectionContainer3.appendChild(workExperienceHeader);
sectionContainer3.appendChild(jobLocation);
sectionContainer3.appendChild(jobDescriptionList);

// Append <div class="section_container3"> to <section class="section1">
section1.appendChild(sectionContainer3);

// Append <section class="section1"> to the document body
document.body.appendChild(section1);
// new
main.appendChild(section1);

// Create <div> element with class "line"
const lineDiv = document.createElement('div');
lineDiv.classList.add('line');
lineDiv.style.borderLeft = '2px solid lightgray';

// Append <div class="line"> to <main>
main.appendChild(lineDiv);

// Create <section> element with class "section2"
const section2 = document.createElement('section');
section2.classList.add('section2');

/* New */
// Create <section> element with class "section2"
const section3 = document.createElement('section');
section3.classList.add('section2');

// Create <div> element with class "section2_container"
const section2Container = document.createElement('div');
section2Container.classList.add('section2_container');

// Create <div> element with class "workExperience"
const workExperienceDiv1 = document.createElement('div');
workExperienceDiv1.classList.add('workExperience');

// Create <div> element with class "section2_heading"
const workExperienceHeading1 = document.createElement('div');
workExperienceHeading1.classList.add('section2_heading');

// Create <i> element with class "fa-solid fa-briefcase"
const workExperienceIcon1 = document.createElement('i');
workExperienceIcon1.classList.add('fa-solid', 'fa-briefcase');

// Create <h1> element with inline style
const workExperienceTitle = document.createElement('h1');
workExperienceTitle.textContent = 'Work experience';
workExperienceTitle.style.color = '#565656';
workExperienceTitle.style.fontSize = '30px';

// Append <i> and <h1> to <div class="section2_heading">
workExperienceHeading1.appendChild(workExperienceIcon);
workExperienceHeading1.appendChild(workExperienceTitle);

// Append <div class="section2_heading"> to <div class="workExperience">
workExperienceDiv1.appendChild(workExperienceHeading1);

// Create <div> element with class "workExperience-header"
const workExperienceHeader1 = document.createElement('div');
workExperienceHeader1.classList.add('workExperience-header');

// Create <h3> element with line breaks for job title
const jobTitle1 = document.createElement('h3');
jobTitle1.innerHTML = 'Community Relations<br>Manager';

// Create <span> element with class "date"
const jobDate1 = document.createElement('span');
jobDate1.textContent = '06/2011-01/2014';

// Append <h3> and <span> to <div class="workExperience-header">
workExperienceHeader1.appendChild(jobTitle1);
workExperienceHeader1.appendChild(jobDate1);

// Create <h4> element with inline style
const jobLocation1 = document.createElement('h4');
jobLocation1.textContent = 'Gay & Lesbian Elder Housing, Los Angeles';
jobLocation1.style.fontWeight = 'normal';
jobLocation1.style.paddingBottom = '10px';

// Create <ul> element
const jobDescriptionList1 = document.createElement('ul');

// Create an array of job descriptions
const jobDescriptions1 = [
  'Arranging presentations and pitch deck.',
  'Designing a PR plan and establishing important focus points.',
  'Designing, creating, and managing content across multiple communication platforms.',
  'Building relationships with key media players.'
];

// Iterate over the job descriptions
jobDescriptions1.forEach((description) => {
  // Create <li> element
  const jobDescription = document.createElement('li');

  // Create <p> element
  const jobDescriptionText = document.createElement('p');
  jobDescriptionText.innerHTML = description;

  // Append <p> to <li>
  jobDescription.appendChild(jobDescriptionText);

  // Append <li> to <ul>
  jobDescriptionList1.appendChild(jobDescription);
});

// Append <div class="workExperience-header">, <h4>, and <ul> to <div class="workExperience">
workExperienceDiv.appendChild(workExperienceHeader);
workExperienceDiv.appendChild(jobLocation);
workExperienceDiv.appendChild(jobDescriptionList);

// Append <div class="workExperience"> to <div class="section2_container">
section2Container.appendChild(workExperienceDiv);

// Create <div> element with class "section2_container2"
const section2Container2 = document.createElement('div');
section2Container2.classList.add('section2_container2');

// Create <div> element with class "education"
const educationDiv = document.createElement('div');
educationDiv.classList.add('education');

// Create <div> element with class "section2_heading"
const educationHeading = document.createElement('div');
educationHeading.classList.add('section2_heading');

// Create <i> element with class "fa-solid fa-graduation-cap"
const educationIcon = document.createElement('i');
educationIcon.classList.add('fa-solid', 'fa-graduation-cap');

// Create <h1> element with inline style
const educationTitle = document.createElement('h1');
educationTitle.textContent = 'Education';
educationTitle.style.color = '#565656';
educationTitle.style.fontSize = '30px';

// Append <i> and <h1> to <div class="section2_heading">
educationHeading.appendChild(educationIcon);
educationHeading.appendChild(educationTitle);

// Append <div class="section2_heading"> to <div class="education">
educationDiv.appendChild(educationHeading);

// Create <div> element with class "education-header"
const educationHeader = document.createElement('div');
educationHeader.classList.add('education-header');

// Create <h3> element
const educationSubtitle = document.createElement('h3');
educationSubtitle.textContent = 'Engineering Immersion';

// Create <span> element with class "date"
const educationDate = document.createElement('span');
educationDate.textContent = '11/2018-06/2018';

// Append <h3> and <span> to <div class="education-header">
educationHeader.appendChild(educationSubtitle);
educationHeader.appendChild(educationDate);

// Create <p> element with inline style
const educationLocation = document.createElement('p');
educationLocation.textContent = 'Thinkful, Chicago, IL';
educationLocation.style.marginBottom = '10px';

// Create <p> element with inline style
const educationDescription = document.createElement('p');
educationDescription.innerHTML =
  'Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript (MERN) technical stack.';

// Create <ul> element
const educationProjectList = document.createElement('ul');

// Create an array of project descriptions
const educationProjects = [
  'Developed a full-stack web application, "RenewU", using React that allows users to explore various aspects of meditation. User\'s progress is stored on a backend created using Node and MongoDB.',
  'Developed a language learning app, "Foodle Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.',
  'Developed a concierge app, "Pley", for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop, and a variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, geospatial searching, and user authentication with JWT.'
];

// Iterate over the project descriptions
educationProjects.forEach((description) => {
  // Create <li> element
  const educationProject = document.createElement('li');

  // Create <p> element
  const educationProjectText = document.createElement('p');
  educationProjectText.innerHTML = description;

  // Append <p> to <li>
  educationProject.appendChild(educationProjectText);

  // Append <li> to <ul>
  educationProjectList.appendChild(educationProject);
});

// Create <div> element with class "section2_footer"
const educationFooter = document.createElement('div');
educationFooter.classList.add('section2_footer');

// Create <h3> element
const educationDegree = document.createElement('h3');
educationDegree.textContent = 'BA, English';

// Create <span> element with class "date"
const educationDegreeDate = document.createElement('span');
educationDegreeDate.textContent = '00/2001-90/2005';

// Append <h3> and <span> to <div class="section2_footer">
educationFooter.appendChild(educationDegree);
educationFooter.appendChild(educationDegreeDate);

// Create <p> element
const educationUniversity = document.createElement('p');
educationUniversity.textContent = 'University of California, Los Angeles';

// Append <div class="education-header">, <p>, <p>, <ul>, <div class="section2_footer">, and <p> to <div class="education">
educationDiv.appendChild(educationHeader);
educationDiv.appendChild(educationLocation);
educationDiv.appendChild(educationDescription);
educationDiv.appendChild(educationProjectList);
educationDiv.appendChild(educationFooter);
educationDiv.appendChild(educationUniversity);

// Append <div class="education"> to <div class="section2_container2">
section2Container2.appendChild(educationDiv);

// Append <div class="section2_container"> and <div class="section2_container2"> to <section class="section2">
section2.appendChild(section2Container);
section2.appendChild(section2Container2);

// Append <section class="section2"> to the document body
document.body.appendChild(section2);

/* New */

// Append <section class="section2"> to <main>
main.appendChild(section2);

// Append <header> to <body>
document.body.appendChild(header);
// Append <main> to <body>
document.body.appendChild(main);

