// İkişer Azaltma
function eksilen(n) {
    var array = [];
    
    for (var i=n; i>=0; i--){
         
       if (i%2==0){
        array.push(i)
       }
        
    
    }
    return array;
}
console.log(eksilen(10))

// İkişer arttırma
function artan(n) {
    var array = [];
    
    for (var i=0; i<=n; i++){
         
       if (i%2==0){
        array.push(i)
       }
        
    
    }
    return array;
}
console.log(artan(100))

