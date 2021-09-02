// ISBN Validation

// let n = lenth of the isbn digits
// let isbn >> contains all digits of isbn
// let isbn = "1112223339"
// let digit contains each digit of the isbn
// index of each digit >> isbn[i]


if(document.getElementById("ex1") != null ) {

    function isbn_input() {
        var isbn = prompt("Please enter ISBN");
        if (isbn != null) {
            document.getElementById("isbn_value").innerHTML =
             isbn + " is " + validISBN10(isbn);
          }
    }
    function validISBN10(isbn) {
        var weighted_sum = 0, i, digit;
        if (isbn.length < 10) {
            return "less than 10";
        }else if(isbn.length > 10) {
            return "greater than 10";
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
}

if(document.getElementById("ex2") != null ) {

    // Input and output part
    function n_input() {
        var n = prompt("Please enter Number");
        if (n != null) {
            document.getElementById("ex2_result").innerHTML =
             n + " is " + sumSquare(n);
          }
    }

    // Functionality Part
    
    function sumSquare(n) {
        let all1 = new Array();
        let all2 = new Array();
        let all = new Array();
        let output1 = [];
        let output2 = [];
        let count = 0;
        for (i = 0; i * i <= n; i++) {
            for (j = 0; j * j <= n; j++) {
                if (i * i + j * j == n) {
                    
                    all1.push(i);
                    all2.push(j);
                    count++
                }
            }
        }
        for (let k = 0; k < count/2; k++) { // count/2 to take unique pairs only
            output1.push(all1[k])
            output2.push(all2[k])
            console.log(output1[k], output2[k]);
            all.push([output1[k], output2[k]]);
            // all.push([output2[k]]);
        }
        console.log(all)
    } 
}

























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