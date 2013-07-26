#!usr/bin/env node
var first = 0.1;
var second = 0.2;
var sum;

// A common way to deal with the problem is to add
// the operands, "scale" the result by multiplying
// by 100, calling Math.round on the result, and
// then dividing by 100. digits truncated. Try doing
// this now. Store the result in sum.
sum=Math.round((first+second)*100,2)/100;
console.log (sum);

