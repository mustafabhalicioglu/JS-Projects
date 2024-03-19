var visitors = ["Mustafa", "İlknur", "Dilara", "Levent"]
var yourName = prompt("what is your name?");
if(visitors.includes(yourName)) { 
    alert("Welcome to the party") 
} else {
    alert("Sorry! You are not invited to the party.")
}
//burada array içinde ismin olup olmadığını görmek için includes kullandık.