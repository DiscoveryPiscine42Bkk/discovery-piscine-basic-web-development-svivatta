const btn = document.getElementById('calculateBtn');

btn.addEventListener('click', function () {
    const left = document.getElementById('left').value;
    const right = document.getElementById('right').value;
    const operator = document.getElementById('operator').value;

    const num1 = parseInt(left);
    const num2 = parseInt(right);

    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 < 0) {
        alert('Error :(');
        return;
    }

    if ((operator === '/' || operator === '%') && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
    }

    alert("Result: " + result);
    console.log("Result: " + result);
});

// Every 30 seconds alert
setInterval(function () {
    alert("Please, use me...");
}, 30000);