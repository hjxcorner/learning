function fn() {                             
    console.log(num); // -> undefined
    return function () {             

    };                               
    var num = 100;                   
}                                  
fn();