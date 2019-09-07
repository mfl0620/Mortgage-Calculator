var t;
var ai;
var n;
var d = (Math.pow(1 + i, n)-1)/(i * Math.pow(1 + i, n));
var mp = t / d;
var ti = mp * n - t;
var calcSubmit = document.getElementById("calcSubmit");
var results = document.getElementById("results");

calcSubmit.addEventListener('click', calculate);

function calculate(){
    
    /*
    t = user input principle
    ai = annual interest rate
    n = number of years (loan term)
    i = monthly interest
    mp = monthly payment
    ti = total interest (lifetime)
    tp = total principle (lifetime)
    */

    var t = document.getElementById("totalPrinciple").value;
    var ai = document.getElementById("interestRate").value / 100;
    var n = document.getElementById("loanTerm").value;
    var i = ai / 12;
    var d = (Math.pow(1 + i, n)-1)/(i * Math.pow(1 + i, n));
    var mp = t / d;
    var ti = mp * n - t;
    var tp  = mp * n;
    if(t == "" || ai == ""){
        alert("Please fill out all fields");
        return false;
    }
    
    document.getElementById("monthlyPayment").innerHTML = "Your monthly payment is: " +"$"+ mp.toFixed(2);
    document.getElementById("totalInterest").innerHTML = "Your lifetime interest is: " + "$"+ti.toFixed(2);
    document.getElementById("totalPayments").innerHTML = "Your total payments are: " + "$"+tp.toFixed(2);
}
