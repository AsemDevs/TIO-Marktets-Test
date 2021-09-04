if(document.getElementById("ex2") != null ) {

    // Input and output part
    function n_input() {
        var n = prompt("Please enter Number");
        if (n != null) {
            document.getElementById("ex2_result").innerHTML = "Check the Console Also<br>" + sumSquare(n);
            ;
          }
    }

    // Functionality Part
    function sumSquare(n) {
        let all1 = [];
        let all2 = [];
        let all = [];
        let output1 = [];
        let output2 = [];
        let outputAll = "";
        let count = 0;
        for (i = 0; i * i <= n; i++) {
            for (j = 0; j * j <= n; j++) {
                if (i * i + j * j == n) {
                    all1.push(i); // to push every pair to a separate array array
                    all2.push(j);
                    count++
                }
            }
        }
        for (let k = 0; k < count/2; k++) { // count/2 to count unique pairs only
            output1.push(all1[k])
            output2.push(all2[k])
            all.push([output1[k], output2[k]]); // Combine pairs together in 2D array
        }
        outputAll = JSON.stringify(all);
        console.log("2D Array = ", all);
        return outputAll;
    } 
}