// ISBN Validation

// let n = lenth of the isbn digits
// let isbn >> contains all digits of isbn
// let isbn = "1112223339"
// let digit contains each digit of the isbn
// index of each digit >> isbn[i]


function validISBN10(isbn) {

    var weighted_sum = 0, i, digit;
    if (isbn.length < 10) {
        return "ISBN is less than 10";
    }
    if(isbn.includes("X") || isbn.includes("x")) {
        isbn = isbn.split(""); // Convert it to Array
        isbn.pop(); // Remove the "X"
        isbn.push("10"); // Replace it with 10
    }
    for (i = 0; i < 10; i++) {
        digit = isbn[i];
        weighted_sum += digit * (i+1);
    }

    if(weighted_sum % 11 == 0) {
        return true;
    }
    else {
        return false
    }
}
var isbn= "123456789x";
console.log(validISBN10(isbn));

























function openChapter(evt, Chapter) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("Chapter");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Chapter).style.display = "block";
    evt.currentTarget.className += " active";
}

function openExercise(evt, Exercise) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("Exercise");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Exercise).style.display = "block";
    evt.currentTarget.className += " active";
}