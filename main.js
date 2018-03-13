var inputP = document.getElementById('amount-received');
var inputD = document.getElementById('amount-due');
var outputDr = document.getElementById('dollars-output');
var outputQ = document.getElementById('quarters-output');
var outputD = document.getElementById('dimes-output');
var outputN = document.getElementById('nickels-output');
var outputP = document.getElementById('pennies-output');
var calculate = document.getElementById('calculate-button');

//function that calculates the change.
function calculateChange() {

    //declared change amount
    var change = (parseFloat(inputP.value) * 100) - (parseFloat(inputD.value) * 100);
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    //dolars calculation
    if (change >= 100) {
        dollars = Math.floor(change / 100);
        outputDr.innerText = dollars;
        change = change - (100 * dollars);
    }

    //quaters calculation
    if (change >= 25) {
        quarters = Math.floor(change / 25);
        outputQ.innerText = quarters;
        change = change - (25 * quarters);
    }

    //dimes calculation  
    if (change >= 10) {
        dimes = Math.floor(change / 10);
        outputD.innerText = dimes;
        change = change - (10 * dimes);
    }

    //nickels calculation   
    if (change >= 5) {
        nickels = Math.floor(change / 5);
        outputN.innerText = nickels;
        change = change - (5 * nickels);
    }
    //pennies calculation   

    if (change >= 1) {
        pennies = Math.ceil(change);
        outputP.innerText = pennies;
        change = change - pennies;
    }
};

//on click function 
function handleClickEvent() {
   
    outputDr.innerText = '0';
    outputQ.innerText = '0';
    outputD.innerText = '0';
    outputN.innerText = '0';
    outputP.innerText = '0';
    calculateChange();
};