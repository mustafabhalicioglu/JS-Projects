
var name = prompt("İsminiz nedir?")
var loveone = prompt("Sevdiğiniz kişinin ismi nedir?")
function loveScore(name, loveone) {
    let n = Math.random();
    return (Math.floor((n*100))+1)
}
alert(name + " ile "+ loveone + " arasındaki aşk uyumu "+ loveScore()+"%");

