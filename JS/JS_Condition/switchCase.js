function groceryPrice(exp){
    switch (exp) {
        case 'Five Star':
            console.log('Five Star cost 5 rupees!');
            break;
        case 'Dairy Milk':
            console.log('Dairy Milk cost 10 rupees!');
            break;
        case 'KitKat':
            console.log('KitKat cost 20 rupees!');
            break;
        case 'Dark Chocolate':
            console.log('Dark Chocolate cost 110 rupees!');
            break;
        default:
            console.log(exp + ' is not available right now!');
    }
}

groceryPrice('Five Star');
//output: Five Star cost 5 rupees!

groceryPrice('Dairy Milk');
//output: Dairy Milk cost 10 rupees!

groceryPrice('KitKat');
//output: KitKat cost 20 rupees!

groceryPrice('Dark Chocolate');
//output: Dark Chocolate cost 110 rupees!
