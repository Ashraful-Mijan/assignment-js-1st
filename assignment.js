
// start kilometerToMeter program:
function kilometerToMeter(kiloMeter) {
    if (kiloMeter < 0) {
        return "length does not exist negative value! Please input correct length";
    }
    else {
        var meter = kiloMeter * 1000;
        return meter;
    }
}
var inputKiloMeter = kilometerToMeter(10);
// console.log(inputKiloMeter);



// start budgetCalculator program:
function budgetCalculator(watch, phone, laptop) {
    if ((watch < 0) || (phone < 0) || (laptop < 0)) {
        return "negative item does not exist"
    }
    else {
        var watchNum = watch * 50;
        var phoneNum = phone * 100;
        var laptopNum = laptop * 500;
        var totalPrice = watchNum + phoneNum + laptopNum;
        return totalPrice;
    }
}
var inputItemNum = budgetCalculator(10, 3, 2)
// console.log(inputItemNum); 




// start hotelCost program:
function hotelCost(day) {
    if (day < 0) {
        return "negative day does not exist"
    }
    else {
        if (day <= 10) {
            var firstTenth = day * 100;
            var totalCost = firstTenth;
        }
        else if (day <= 20) {
            var minusDay = day - 10;
            var discountDay = minusDay * 80;
            var firstTenth = 10 * 100;
            var secondTenth = discountDay;
            var totalCost = firstTenth + secondTenth;
        }
        else {
            var finalDay = day - 20;
            var lastDiscount = finalDay * 50;
            var firstTenth = 10 * 100;
            var secondTenth = 10 * 80;
            var totalCost = firstTenth + secondTenth + lastDiscount;
        }
    }

    return totalCost;
}

var inputDay = hotelCost(71)
// console.log(inputDay);




// start megaFriend program:
function megaFriend(str){
    var array = str;
    var result = array[0];
    for(i = 0; i<array.length; i++){

        if(result.length < array[i].length){
            result = array[i];
        }
    }

    return result;
}

var friendList = ['jhankarmahbub', 'jamil', 'ashraful-mijan', 'shimul', 'monir'];
var input = megaFriend(friendList);
// console.log(input);