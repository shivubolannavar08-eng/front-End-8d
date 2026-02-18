let inputvalue = document.getElementById("userinputvalueid");
console.log(inputvalue);

let status1 = document.getElementById("statusiD");
console.log(status1);

let randomnumber = Math.ceil(Math.random() * 20);
console.log(randomnumber);

function check() {
    if (inputvalue.value === "") {
        alert("Please enter any value");
    } else {
        let uservalue = parseInt(inputvalue.value);
        if (uservalue === randomnumber) {
            status1.textContent = "Status: You are the winner!";
        } else if (uservalue > randomnumber) {
            status1.textContent = "Status: Your number is larger.";
        } else if (uservalue < randomnumber) {
            status1.textContent = "Status: Your number is lower.";
        }
    }
}

