
// Burada konu boş bir arrayin içerisine yazdığımız fonksiyon ile sayılar yerleştiriyoruz. Sayılar 3'ün katı ise, yani 3'e bölüne biliyor ise (count % 3 === 0) buraya 3 yerine Fizz, eğer 5'in katı ise o sayı yerine Buzz yazılacak. Her ikisinin katı ise "FizzBuzz" yazılacak.
var output = [];
var count = 1;
function fizzBuzz(){
    
    if (count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz")
    }
    else if(count % 3 === 0){
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    }else {
        output.push(count)
    }
    count++;    
    console.log(output);
}
// Not fizzBuzz() fonksiyonunu consoleda tekrar tekrar çalıştırın...
// burada else if değilde if kullanırsak hem sayıyı hemde fizz ve bizz koyuyor.
