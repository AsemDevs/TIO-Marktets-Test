// ISBN Validation

// let n = lenth of the isbn digits
// let isbn >> contains all digits of isbn
// let isbn = "1112223339"
// let digit contains each digit of the isbn
// index of each digit >> isbn[i]

function validISBN10(isbn) {
    weighted_sum = 0;
    for (var i = 1; i <= 10; i++) {
        let digit = isbn[i-1];
        console.log(weighted_sum += digit * i);
        console.log(digit);
    }
    var last_digit = "Last Digit is " + isbn[9];
   console.log(weighted_sum % 11);
   console.log(last_digit);
}

var isbn= "111222333x";
validISBN10(isbn);























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