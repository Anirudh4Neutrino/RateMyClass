
function doShit2() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  //alert(category);
  /*const course2 = courses[courses.];*/
  const courses2 = Object.entries(courses);
  const currentCourse = "";
  alert(courses2[0].getClassName());
  
  
}