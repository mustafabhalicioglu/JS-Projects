var weight = prompt("What is your weight?")
var height = prompt("What is your height?")
function bmiCalculator (weight, height) {
  var bmi= weight/(height**2);
  Math.round(bmi);
if (bmi<18.5){
  return "Your BMI is "+bmi.toFixed(2)+", so you are underweight.";
}
if (bmi>=18.5 && bmi<=24.9){
  return "Your BMI is "+ bmi.toFixed(2)+", so you have a normal weight.";
}
if (bmi>24.9){
  return "Your BMI is "+ bmi.toFixed(2)+",  so you are overweight.";
}
}
alert(bmiCalculator (weight, height));
// tofixed(2) bir sayıyı 2 basamaklı ondalık sayı ile verir
// height**2 boyun karasini alır eğer 3 olsaydı küpünü alırdı.