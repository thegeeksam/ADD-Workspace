function checkEligibility(age){
    if(age<18){
        console.log(`your Age is: ${age}\nSorry!\nYou are not eligible for voting\n`);
    }
    
    else{
        console.log(`your Age is: ${age}\nYou are eligible for voting`);
    }
}

// Sorry! You are not eligible for voting
checkEligibility(11);

// You are eligible for voting
checkEligibility(34);