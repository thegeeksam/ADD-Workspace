let Chocolate = prompt('What Chocolate you want?\n1. Five Star\n2. Dairy Milk\n3. Kitkat: ');
console.log(typeof(Chocolate));
let exp = parseInt(Chocolate);
groceryPrice(exp);//Function call

function groceryPrice(exp){
    switch (exp) {  
        case 1:
            document.getElementById("p1").textContent ='Five Star🍫 cost 10 rupees!';
            break;
        case 2:
            document.getElementById("p2").textContent ='Dairy Milk🍫 cost 20 rupees!';
            break;
        case 3:
            document.getElementById("p3").textContent ='KitKat🍫 cost 5 rupees!';
            break;
        default:
            document.getElementById("p4").textContent = 'Invalid Choice!';
    }
}


