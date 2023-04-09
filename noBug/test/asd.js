let once = function(fn) {
    let caller = true;
    return function() {
        if(caller) {
            caller = false
            fn.apply(this, arguments)
        }
    }
    
}