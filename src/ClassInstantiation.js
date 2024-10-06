const creativeWriting = new Course(
    false, // dualCredit
    "Creative Writing (ENG221)",
    "11-12",
    "None",
    "Semester",
    "none",
    "A course focusing on creative writing techniques and styles.",
    "B+",
    [4.2, 4.0, 4.5], // ratings
    ["Interesting and fun!", "Loved the writing prompts!"], // comments
    3 // averageTimePerWeek
);

const apEnglishLiterature = new Course(
    true, // dualCredit
    "AP English Literature & Composition (Lit 101 & 185)",
    "11-12",
    "None",
    "Full-Year",
    "AP",
    "Advanced placement course in English literature and composition.",
    "A",
    [5.0, 4.8, 4.9], // ratings
    ["Challenging but rewarding.", "Excellent preparation for college."], // comments
    6 // averageTimePerWeek
);

const apEnglishLanguage = new Course(
    true, // dualCredit
    "AP English Language & Composition (ENG 105 & 106)",
    "11-12",
    "None",
    "Full-Year",
    "AP",
    "Advanced placement course focusing on English language and composition.",
    "A",
    [4.7, 4.9, 4.8], // ratings
    ["Engaging and informative.", "Great for developing writing skills."], // comments
    5 // averageTimePerWeek
);

const worldLiterature = new Course(
    false, // dualCredit
    "World Literature 2 (LIT 151)",
    "11-12",
    "None",
    "Semester",
    "none",
    "An exploration of world literature from various cultures and time periods.",
    "B",
    [3.8, 4.0, 3.9], // ratings
    ["Good diversity of texts.", "Interesting perspectives on global literature."], // comments
    3 // averageTimePerWeek
);

// 9th Grade Courses
const english9Workshop = new Course(
    false,
    "English 9 Workshop",
    "9th",
    "None",
    "Fall Semester",
    "none",
    "A workshop course focused on writing skills for 9th graders.",
    "B+",
    [4.0, 4.2],
    ["Great for developing writing skills.", "Helpful feedback from teacher."],
    3
);

const english9Literature = new Course(
    false,
    "English 9 Literature",
    "9th",
    "None",
    "Spring Semester",
    "none",
    "A literature course exploring a variety of texts.",
    "B",
    [3.8, 4.0],
    ["Interesting reads.", "Good discussion in class."],
    3
);

// 10th Grade Courses
const americanLiterature = new Course(
    false,
    "American Literature",
    "10th",
    "None",
    "Full Year",
    "none",
    "A comprehensive course covering American literature.",
    "B+",
    [4.1, 4.3],
    ["Broad range of authors.", "Engaging class discussions."],
    4
);

const basicComposition = new Course(
    false,
    "Basic Composition",
    "10th",
    "None",
    "Either Semester",
    "none",
    "A course focused on fundamental writing skills.",
    "B",
    [3.9, 4.0],
    ["Practical writing exercises.", "Helpful for improving writing."],
    3
);


const introToJournalism10 = new Course(
    false,
    "Intro. to Journalism",
    "10th",
    "None",
    "Either Semester",
    "none",
    "An introduction to the basics of journalism.",
    "B",
    [3.7, 3.9],
    ["Informative course.", "Great for aspiring journalists."],
    2
);

const mythologyFantasyFolklore = new Course(
    false,
    "Mythology, Fantasy, Folklore",
    "10th",
    "None",
    "Either Semester",
    "none",
    "A course exploring myths, fantasy literature, and folklore.",
    "B",
    [3.8, 4.1],
    ["Fascinating topics.", "Great storytelling."],
    3
);

const surveyLiterature10 = new Course(
    false,
    "Survey of Literature (10th)",
    "10th",
    "None",
    "Either Semester",
    "none",
    "An exploration of various literary texts for 10th graders.",
    "B+",
    [4.0, 4.2],
    ["Diverse reading list.", "Thought-provoking discussions."],
    3
);

// 11th & 12th Grade Courses
const speech = new Course(
    false,
    "Speech",
    "11-12",
    "None",
    "Either Semester",
    "none",
    "A course focused on developing public speaking skills.",
    "B+",
    [4.0, 4.1],
    ["Improved my speaking confidence.", "Useful for presentations."],
    3
);

const multimediaComposition = new Course(
    false,
    "Multimedia Composition",
    "11-12",
    "None",
    "Either Semester",
    "none",
    "A course integrating multimedia into writing projects.",
    "B+",
    [4.2, 4.4],
    ["Engaging assignments.", "Great use of technology."],
    4
);

const introToJournalism1112 = new Course(
    false,
    "Intro. to Journalism",
    "11-12",
    "None",
    "Either Semester",
    "none",
    "An introduction to the basics of journalism.",
    "B",
    [3.7, 3.9],
    ["Informative course.", "Great for aspiring journalists."],
    2
);

const activismSocialJustice = new Course(
    false,
    "Activism & Social Justice Literature",
    "11-12",
    "None",
    "Either Semester",
    "none",
    "A literature course examining themes of activism and social justice.",
    "B+",
    [4.0, 4.2],
    ["Thought-provoking texts.", "Great for discussions on social issues."],
    3
);

const horrorLiterature = new Course(
    false,
    "Horror Literature",
    "11-12",
    "None",
    "Either Semester",
    "none",
    "A course exploring the genre of horror literature.",
    "B",
    [3.8, 4.0],
    ["Spooky and fun.", "Great variety of horror stories."],
    3
);

const scienceFictionLiterature = new Course(
    false,
    "Science-Fiction Literature",
    "11-12",
    "None",
    "Either Semester",
    "none",
    "A course exploring science fiction literature.",
    "B+",
    [4.1, 4.3],
    ["Interesting futuristic themes.", "Thought-provoking stories."],
    3
);

const shakespeare = new Course(
    false,
    "Shakespeare",
    "11-12",
    "None",
    "Either Semester",
    "none",
    "A course focused on the works of William Shakespeare.",
    "A-",
    [4.3, 4.5],
    ["Deep dive into Shakespeare.", "Great analysis of plays."],
    4
);

// 12th Grade Only Courses
const surveyLiterature12 = new Course(
    false,
    "Survey of Literature (12th)",
    "12th",
    "None",
    "Either Semester",
    "none",
    "An exploration of various literary texts for 12th graders.",
    "B+",
    [4.0, 4.2],
    ["Diverse reading list.", "Thought-provoking discussions."],
    3
);

const litSociologyResistance = new Course(
    false,
    "Lit & Sociology of Resistance Movements",
    "12th",
    "None",
    "2nd Semester",
    "none",
    "A course examining literature and sociology of resistance movements.",
    "B+",
    [4.0, 4.1],
    ["Insightful topics.", "Great discussions on resistance movements."],
    3
);

// Electives
const drama = new Course(
    false,
    "Drama",
    "9-12",
    "None",
    "Either Semester",
    "none",
    "A course focused on the art of drama and theater.",
    "B+",
    [4.2, 4.3],
    ["Fun and creative.", "Great for building confidence."],
    3
);
// Electives continued
const advancedJournalismWeb = new Course(
    false,
    "Advanced Journalism (The Web)",
    "9-12",
    "Intro. to Journalism",
    "Either Semester",
    "none",
    "An advanced course focusing on digital journalism and web-based reporting.",
    "A-",
    [4.2, 4.4],
    ["Great for learning digital journalism.", "Engaging and informative projects."],
    3
);

const spiritYearbook = new Course(
    false,
    "SPIRIT (AHS Yearbook)",
    "9-12",
    "Intro. to Journalism",
    "Either Semester",
    "none",
    "A hands-on course focused on creating the school yearbook.",
    "A-",
    [4.3, 4.5],
    ["Fun and creative.", "Great for teamwork and project management."],
    3
);
