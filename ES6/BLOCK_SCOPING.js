let y = 2;
{
    let x = 1;
    let z = 3;
    console.log(x + z);
}
{
    // console.log(x);
    let z = 4; // no re declaration error, variables are in differents scopes
    console.log(z);
    console.log(y);
}
//ES5 using IIFE  (fake scoping)
let mark = 80;
let pass;

if(mark > 50 ){
     pass = true;
}else{
     pass = false;
}
console.log(pass);