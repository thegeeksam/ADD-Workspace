function score(score){
    if(score > 49){
        if(score > 99){
            console.log('Century!!')//; - is optional
        }   else{
            console.log('Half century!!');
        }
    }
    else{
        if(score == 0){
            console.log('Duck!');
        }else{
            console.log('You played well.');
        }
    }
}
//You played well.
score(12);

// Half century!!
score(51);

//Duck!
score(0);

//Century!!
score(113);