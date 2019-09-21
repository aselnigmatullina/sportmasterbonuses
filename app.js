console.log('worked');

//синяя-15_000: 50 бонусов
//серебряная-15_000-150_000: 70
//золотая-150_001: 100 бонусов

//итоговое количество бонусов с конкретной покупки 
const previousPurchase=60000;
const currentPurchase = 4000;
let bonusesPerOneThousand;

if(previousPurchase <= 15000){
  bonusesPerOneThousand=50;
}
else {
    if(previousPurchase <= 150000){
    bonusesPerOneThousand=70;
}   else{
    bonusesPerOneThousand=100;
}
}
console.log(bonusesPerOneThousand);

