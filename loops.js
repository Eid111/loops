/* function is15(num1, num2) { 
    let numbers = [num1, num2];
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 15 || (numbers[0] + numbers[1]) === 15) {
            return true;
        }
    }
    
    return false;
}

let num1=+prompt("enter the number 1");
let num2=+prompt("enter the number 2");

console.log(is15(num1, num2));

 */


function isperfectsqure(num){
    let square=parseInt(Math.sqrt(num));
    if(square* square==num){
        return true;
    }
    else{
        return false;
    }   
}   

let num=+prompt("enter the number");
console.log(isperfectsqure(num));

