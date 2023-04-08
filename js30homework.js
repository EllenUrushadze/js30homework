//N1 ყველა კენტი რიცხვი 2000-მდე
let i = 1;
while(i <= 2000){
    console.log(`რიცხვი ${i} while loop-ით`);
    i += 2;
}

for(let h = 1; h <= 2000; h +=2){
    console.log(`რიცხვი ${h} for loop-ით`);
}

//N2 ყველა ლუწი რიცხვი -2000 მდე
let y = 0;
while(y >= -2000){
    console.log(`რიცხვი ${y} while loop-ით`);
    y -= 2;
}

for(let z = 0; z >= -2000; z -= 2){
    console.log(`რიცხვი ${z} for loop-ით`);
}

//N3 ჩექფოინთი
for(let m = 0; m <= 100; m++){
    if(m == 10){
        console.log(`გილოცავთ, თქვენ გაიარეთ ${m} კილომეტრიანი ჩექფოინთი`);
        continue;
    }
    if(m == 25){
        console.log(`გილოცავთ, თქვენ გაიარეთ ${m} კილომეტრიანი ჩექფოინთი`);
        continue;
    }
    if(m == 75){
        console.log(`გილოცავთ, თქვენ გაიარეთ ${m} კილომეტრიანი ჩექფოინთი`);
        continue;
    }
    if(m == 90){
        console.log(`გილოცავთ, თქვენ გაიარეთ ${m} კილომეტრიანი ჩექფოინთი`);
    }
}

//N4 კენტი რიცხვების ჯამი
let sum = 0;
for(let n = 0; n < 25000; n++){
    sum += n;
}
console.log(`0-დან 25000-მდე ყველა კენტი რიცხვის ჯამი: ${sum}`);

//N5  ჯამი და ჯამი
let sum1 = 0;
let sum2 = 0;

for(let k = 501; k <= 800; k += 2){ // 500-დან 800-მდე ყველა კენტი რიცხვი
    sum1 += k;
}
console.log(`500-დან 800-მდე ყველა კენტი რიცხვის ჯამი: ${sum1}`);

for(let l = 1000; l <= 2000; l += 2){ // 1000-დან 2000-მდე ყველა ლუწი რიცხვი
    sum2 += l;
}
console.log(`1000-დან 2000-მდე ყველა ლუწი რიცხვის ჯამი ${sum2}`);
console.log(`500-დან 800-მდე კენტი რიცხვის და 1000-დან 2000-მდე ყველა ლუწი რიცხვის ჯამი: ${sum1 + sum2}`);

//N6  მათემატიკური ფაქტორიალი
let t = 25;
let factorial = 1;
if(t >= 1){
    for(let f = t; f >= 1; f--){
        factorial = factorial * f;
    }
    console.log(`${t}-ს ფაქტორიალი: ${factorial}`);
}

//N7 300-is გამყოფები
let number = 300;
let s = 1;
for(let s = number; s >= 0; s--){
    if(number % s == 0){
        console.log(`300-ის გამყოფია ${s}`);
    }
}

//N8 რიცხვის გამყოფები
let x = 15;
let a = 1;
if(x >= 1){
    for(let a = x; a >= 0; a--){
        if(x % a == 0){
            console.log(`${x}-ის გამყოფია ${a}`);
        }
    }
}else{
    console.log(`${x} არ არის 1-ზე დიდი დადებითი რიცხვი`);
}








