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
   




