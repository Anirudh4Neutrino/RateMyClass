let curentFilters = [];
let bookmarks = [];
let currentAnimations = [];

const unfilled= "style=\"font-variation-settings:'FILL' 0\"";


function load() {
  if(sessionStorage.getItem("bookmarks") === null) {
    bookmarks = [];
} else {
  bookmarks = sessionStorage.getItem("bookmarks").split(",");
}
}
function doshit() {
  let body = document.getElementById('classGrid');
  let totalHTML = "";
  
  if(curentFilters.length ===0) {
     for (let i = 0; i < courses.length; i++) {
            const course = courses[i];
            if(bookmarks.includes(course.getClassName())) {
                  //alert("bookmarked " + course.getClassName());  
                  //alert(makeHTML(course, true));
                  totalHTML += makeHTML(course, true);
                } else {
                  //alert("not bookmarked " + course.getClassName());
                  totalHTML += makeHTML(course, false);
                  //alert(totalHTML);
                }
    }
  } else {
    for (let i = 0; i < courses.length; i++) {
            const course = courses[i];
            if(curentFilters.includes("bookmarked")) {
              if(bookmarks.includes(course.getClassName())) {
                totalHTML += makeHTML(course, true);
              }
            } 
            if(curentFilters.includes(course.getSubject())) {
              if(curentFilters.includes("bookmarked")) {
                
              } else {
            if(bookmarks.includes(course.getClassName())) {
                  //alert("bookmarked " + course.getClassName());  
                  //alert(makeHTML(course, true));
                  totalHTML += makeHTML(course, true);
                } else {
                  //alert("not bookmarked " + course.getClassName());
                  totalHTML += makeHTML(course, false);
                  //alert(totalHTML);
                }
            }
            }
            
    }
  }
    body.innerHTML = totalHTML;
}
      
      
      
      
      
      
      /*
      
      
      
      
       // alert(courses[i]);
  let classCardDiv = "<div class=\"classCard " + course.getSubject() + "\">";
  if(bookmarked.includes(course.getClassName())) {

    let headerDiv = "<div class=\"classHeader\">" + "<span class=\"material-symbols-rounded\"" + unfilled + ">" + course.getIcon() + "</span><div class=\"className\"><u>" + course.getClassName() + "</u></div><span class=\"material-symbols-rounded\" style=\"cursor: pointer;font-variation-settings:'FILL' 0\" onclick=\"fav(this)\" id=\"" + course.getClassName() + "\">bookmark</span></div>";

  
  let starDiv = "<div class=\"classRate\">" + numberToStars(course.getAverageRating()) + "</div>";
  let descriptionDiv = "<div class=\"classDes\">" + course.getDescription() + "</div></div>";
  let htmlCard = classCardDiv + headerDiv + starDiv + descriptionDiv;
  bodyHTML += htmlCard;
}
body.innerHTML = bodyHTML;
} else {
  let bodyHTML = "";
 for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
       // alert(curentFilters + " " + course.getSubject())
       //alert(course.getFilters());
;      if(curentFilters.includes(course.getSubject()) === true) {
       // alert(courses[i]);
  let classCardDiv = "<div class=\"classCard " + course.getSubject() + "\">"
  let headerDiv = "<div class=\"classHeader\">" + "<span class=\"material-symbols-rounded\"" + unfilled + ">" + course.getIcon() + "</span><div class=\"className\"><u>" + course.getClassName() + "</u></div><span class=\"material-symbols-rounded\" style=\"cursor: pointer;font-variation-settings:'FILL' 0\" onclick=\"fav(this)\">bookmark</span></div>";
  let starDiv = "<div class=\"classRate\">" + numberToStars(course.getAverageRating()) + "</div>";
  let descriptionDiv = "<div class=\"classDes\">" + course.getDescription() + "</div></div>";
  let htmlCard = classCardDiv + headerDiv + starDiv + descriptionDiv;
  //alert(htmlCard);
  bodyHTML += htmlCard;
}
}
  body.innerHTML = bodyHTML;
}
}
*/

function makeHTML(course, fill) {
  let bodyHTML = "";
  if(fill === true) {
            let classCardDiv = "<div class=\"classCard " + course.getSubject() + "\">";
            let headerDiv = "<div class=\"classHeader\">" + "<span class=\"material-symbols-rounded\"" + unfilled + ">" + course.getIcon() + "</span><div class=\"className\"><u>" + course.getClassName() + "</u></div><span class=\"material-symbols-rounded\" style=\"cursor: pointer;font-variation-settings:'FILL' 1\" onclick=\"fav(this)\" id=\"" + course.getClassName() + "\">bookmark</span></div>";
            let starDiv = "<div class=\"classRate\">" + numberToStars(course.getAverageRating()) + "</div>";
            let descriptionDiv = "<div class=\"classDes\">" + course.getDescription() + "</div></div>";
            let htmlCard = classCardDiv + headerDiv + starDiv + descriptionDiv;
            bodyHTML += htmlCard;
  } else {
    let classCardDiv = "<div class=\"classCard " + course.getSubject() + "\">";
    let headerDiv = "<div class=\"classHeader\">" + "<span class=\"material-symbols-rounded\"" + unfilled + ">" + course.getIcon() + "</span><div class=\"className\"><u>" + course.getClassName() + "</u></div><span class=\"material-symbols-rounded\" style=\"cursor: pointer;font-variation-settings:'FILL' 0\" onclick=\"fav(this)\" id=\"" + course.getClassName() + "\">bookmark</span></div>";
            let starDiv = "<div class=\"classRate\">" + numberToStars(course.getAverageRating()) + "</div>";
            let descriptionDiv = "<div class=\"classDes\">" + course.getDescription() + "</div></div>";
            let htmlCard = classCardDiv + headerDiv + starDiv + descriptionDiv;
            bodyHTML += htmlCard;
  }

  return bodyHTML;
}

function numberToStars(rating) {
  let output = "";
  for(i = 0; i < 5; i++) {
    if(i < rating) {
      output += "<span class=\"material-symbols-rounded\">star</span>";
    } else {
      output += "<span class=\"material-symbols-rounded\"" + unfilled + ">star</span>";
    }
  }
  return(output);
}

function loopThroughClasses() {
    // Loop through all courses
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        
        // Access and display various properties of each class
        alert(`Course: ${course.getSubject()}`);
        alert(`Average Rating: ${course.getAverageRating()}`);
        alert(`Average Grade: ${course.getAverageGrade()}`);
        alert(`Duration: ${course.getDuration()}`);
        alert(`Description: ${course.getDescription()}`);
        alert(`---`);  // Separator between courses
    }
}

function filter(type) {
  let body = document.getElementById('classGrid');
  if(curentFilters.includes(type.toLowerCase())) {
    curentFilters[curentFilters.indexOf(type.toLowerCase())] = "";
  } else {
    curentFilters.push(type.toLowerCase());
  }
  curentFilters = curentFilters.filter(item => item !== "");
  body.innerHTML = "";
  //alert(curentFilters);
  doshit();

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap array[i] with the element at random index
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


