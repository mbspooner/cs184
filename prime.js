#!/usr/bin/env node
// function to test if number is a prime number
// returns 1 if prime and 0 if not
var testPrime = function (n) {
    for (i=2; i < n; i++){
        m = n%i;
        if(m === 0){
           r=0;
           break;
        }
        else {r=1;}
    }
    return r;
};
//check all odd numbers until you get 100 prime numbers
//even numbers can't be prime
var primeArr =[2];
var n=3;
while (primeArr.length <100){
   var prime=testPrime(n);
   if (prime===1){
       primeArr.push(n);
   };
   n=n+2;
}
var fs=require('fs');
var outfile = 'prime.txt';
var data=primeArr.join(",");
fs.writeFile(outfile,data);
console.log("Script: " + __filename +"\nWrote first 100 prime numbers to file: "+outfile);

