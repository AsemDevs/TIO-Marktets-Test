if(document.getElementById("ex2") != null ) {

    // Input and output part
    function n_input() {
        var n = prompt("Please enter Number");
        if (n != null) {
            document.getElementById("ex2_result").innerHTML = "Check the Console";
            sumSquare(n);
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
            console.log([output1[k], output2[k]]);
            all.push([output1[k], output2[k]]);
            // all.push([output2[k]]);
        }
        console.log("2D Array = ", all);
    } 
}