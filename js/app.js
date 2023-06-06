'use strict'
let userName=prompt("Please enter your name:")

let userAge=prompt("Please enter your age:")

if(userAge <=0)
{
    userAge=prompt("Your age must be more the 0")
}

let userGender=prompt("Please enter your gender:")
 let msORmr;
if(userGender== "male" || userGender== "female")
{
    
    }else{  
        
        userGender=prompt("The answer should be either (male or female).")
    // alert("Welcome Back " + userName + "! Glad to see you again"  ) }
    
    }
    switch(userGender){
        case "male":
            msORmr="Mr";
            break;
            case "female":
                msORmr="Ms";
                break;
            default:
                msORmr="";}
                
    let userConfirmation=confirm("Want a Welcome Message?!")
    switch(userConfirmation){
        case true:
            alert("Welcome Back "+ msORmr + " " + userName + "! Glad to see you again" ) 
            break;
    }

///////////////////////////// Lab 06

var userStudent=prompt("Are you a student?")
var userField=prompt("Did you Finsh something related to the IT Field?")
var userDream=prompt("Was the IT college your dream?")

let arr=[]

    arr[0]=userStudent;
    arr[1]=userField;
    arr[2]=userDream;

function checkInput(arr){
    for(let i=0;i<=arr.length-1;i++){
        if (arr[i]== ''){
            arr[i]= "invaild";
       }}
}

function inOrder(arr){

    for(let i=0;i<=arr.length-1;i++)
    {
        console.log(arr[i]);
    }
}

function traverseOrder(arr){

    for(let i=arr.length-1;i>=0;i--)
    {
        console.log(arr[i]);
    }
}

console.log(checkInput(arr));
console.log(inOrder(arr));
console.log(traverseOrder(arr));






