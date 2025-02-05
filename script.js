var scr = document.querySelector("#screen");
var AC = document.querySelector(".AC");
var plus_minus = document.querySelector(".plus-minus");
var percent = document.querySelector(".percentage");
var divide = document.querySelector(".divide");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var multiply = document.querySelector(".multiply");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var minus = document.querySelector(".minus");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var plus = document.querySelector(".plus");
var zero = document.querySelector(".zero");
var dot = document.querySelector(".dot");
var equal = document.querySelector(".equal");

var temp_storage = 0;
var operation_storage = 0;
var curr_operation = null;
var decimal = false;

function updateDisplay(value) {
    scr.innerHTML = value;
}

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
time = hours+":"+minutes;
console.log(time);
function updateDate() {
    const dateElement = document.querySelector('.date');
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    dateElement.textContent = `${dayName}, ${monthName} ${date}`;
}


function refreshTime() {
    t = document.querySelector("h2");
    const now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (minutes<10){
        minutes="0"+minutes;
    }
    time = hours+":"+minutes+":"+seconds;
    t.innerHTML = time;
}
setInterval(refreshTime, 10);


function clearAll() {
    temp_storage = 0;
    operation_storage = 0;
    curr_operation = null;
    decimal = false;
    updateDisplay("0");
    AC.innerHTML = "AC";
}

function performOperation() {
    if (curr_operation === '+') {
        operation_storage += temp_storage;
    } else if (curr_operation === '-') {
        operation_storage -= temp_storage;
    } else if (curr_operation === 'X') {
        operation_storage *= temp_storage;
    } else if (curr_operation === '/') {
        operation_storage /= temp_storage;
    } else if (curr_operation === '%') {
        operation_storage = (operation_storage * temp_storage) / 100;
    } else {
        operation_storage = temp_storage;
    }
    temp_storage = 0;
    updateDisplay(operation_storage);
}

AC.addEventListener("click", clearAll);

plus_minus.addEventListener("click", function() {
    temp_storage = -temp_storage;
    updateDisplay(temp_storage);
});

percent.addEventListener("click", function() {
    if (temp_storage !== 0) {
        temp_storage = (operation_storage * temp_storage) / 100;
        updateDisplay(temp_storage);
    }
});

divide.addEventListener("click", function() {
    performOperation();
    curr_operation = '/';
});

multiply.addEventListener("click", function() {
    performOperation();
    curr_operation = 'X';
});

minus.addEventListener("click", function() {
    performOperation();
    curr_operation = '-';
});

plus.addEventListener("click", function() {
    performOperation();
    curr_operation = '+';
});

equal.addEventListener("click", function() {
    performOperation();
    curr_operation = null;
});

dot.addEventListener("click", function() {
    if (!decimal) {
        temp_storage = temp_storage.toString() + '.';
        updateDisplay(temp_storage);
        decimal = true;
    }
});

[zero, one, two, three, four, five, six, seven, eight, nine].forEach(button => {
    button.addEventListener("click", function() {
        if (decimal) {
            temp_storage = temp_storage.toString() + button.innerHTML;
        } else {
            temp_storage = (temp_storage * 10) + parseFloat(button.innerHTML);
        }
        updateDisplay(temp_storage);
    });
});

// Initialize
clearAll();


