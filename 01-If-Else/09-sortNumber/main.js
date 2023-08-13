let number1 = +prompt("number1")
let number2 = +prompt("number2")
let number3 = +prompt("number3")
let lastgest;
let middle;
let small;

if(number1 >= number2 && number1 >= number3){ // number 1 มากที่สุด
    lastgest = number1
    if(number2 >= number3){ // number 2 ตัวเทียบกัน
        middle = number2
        small = number3
    }else{ // 3 > 2
        middle = number3 
        small = number2
    }
}else if(number2 >= number1 && number2 >= number3){ // number2 มากที่สุด
    lastgest = number2
    if(number1 >= number3){  // number 2 ตัวเทียบกัน
        middle = number1
        small = number3
    }else{ //3 > 1
        middle = number3
        small = number1
    }
}else{
    lastgest = number3
    if(number1 >= number2){  // number 2 ตัวเทียบกัน
        middle = number1
        small = number2
    }else{ // 2 > 1
        middle = number2
        small = number1
    }
}
alert(`result is ${lastgest} ${middle} ${small}`)