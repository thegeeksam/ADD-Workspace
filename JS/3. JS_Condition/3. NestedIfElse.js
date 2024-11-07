let run = prompt("Enter your score: ");
// console.log(typeof run);
score(run);
function score(run){
    if(run > 49){
        if(run > 99){
            console.log('Century!!');
        }   else{
            console.log('Half century!!');
        }
    }
    else{
        if(run == 0){
            console.log('Duck!');
        }   else{
            console.log('You played well.');
        }
    }
}
