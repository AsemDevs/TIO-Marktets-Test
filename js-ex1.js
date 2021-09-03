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