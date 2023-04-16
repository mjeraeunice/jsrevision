//Write a function that takes in a string and returns it when reversed
//let food = “eating”
function meal(food){
return food.split("").reverse("").join("");
}
let food ="eating"
console.log(meal(food));
//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
function mergeSorting(num){
    if(num.length<=1){
        return num
    }
    const middle= Math.floor(num.length/2);
    const left=num.slice(0,middle);
    const right=num.slice(middle);

    return sorted(mergeSorting(left),mergeSorting(right))
}
function sorted(left,right){
    result=[];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            result.push(left.shift())
        }
        else{
          result.push(right.shift());  
        }
}
return result.concat(left,right);
}
let num=[2,8,0,23,5,45,76];
console.log(mergeSorting(num))

function binarySearch(num,target){
let left=0;
let right=num.length-1
while(left<=right){
    let middle=Math.floor((left+right)/2);
    if(num[middle]===target){
        return middle
    }
    else if(num[middle]<target){
        left=middle+1
    }
    else{
        right=middle-1
    }
}
return null
}
let target=23;
let sortedNo=mergeSorting(num);
let finalAnswer=binarySearch(sortedNo,target);

console.log(finalAnswer);

// //Given years between 2000 and 2023, console all the leap years in the following
// //sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (let year=2000; year <= 2023;year++){
    if (year %4== 0 && (year % 100!==0)){
        console.log(year +"is a leap ");
    }
    else{
        console.log(year + "is not a leap year");
    }
}
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for(let i=1;i<=100;i++){
if(i%5==0 && i%3===0){
    console.log(i+"FizzBuzz")
}
else if(i%3==0){
    console.log(i+"Fizz");
}
else if(i%5==0){
    console.log(i+"Buzz");
}
}
//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
function arrayOfnum(numArray){
    numArray.forEach(function(numArray){
        console.log(numArray *4);
    });
}
let numArray=[12,87,45,75,23,64,73]
arrayOfnum(numArray)

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
function toString(nums){
    const result=[]
nums.forEach(num=>{
result.push(parseInt(num))
});
return result;
}
let nums=["5","10","4","6","55"];
console.log(toString(["5","10","4","6","55"]));

