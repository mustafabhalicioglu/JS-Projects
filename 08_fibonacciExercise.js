// The Fibonacci Exercise
// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// Where every number is the sum of the two previous ones.
// e.g. 0, 1, 1, 2, 3, 5 comes from
// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// etc.
// Create a function where you can call it by writing the code:
// fibonacciGenerator (n)
// Where n is the number of items in the sequence.
// So I should be able to call:
// fibonacciGenerator(3) and get
// [0,1,1]
// as the output.

function fibonacciGenerator (n) {
    var output = [];
    
    for (let i = 0; i < n; i++) {
        if(i==0){
            output.push(0);
            
        } else if(i==1){
            output.push(1);
            
        } else {
            output.push(output[i-1]+output[i-2])
            
        }       
    }
    return output;
        
    
}
console.log(fibonacciGenerator(15))


