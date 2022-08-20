
function receivesAFunction(spy){
    return spy();
}
function returnsANamedFunction(){
    let fn = function named(){};
    return fn;
    // return function named(){};
}


function returnsAnAnonymousFunction (){
    return function () {};
} 