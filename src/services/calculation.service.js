exports.sum = function(num1,num2){
    return num1 + num2;
};
exports.subtract = function(num1,num2){
    return num1 - num2;
};
exports.multiplication = function(num1,num2){
    return num1 * num2;
};
exports.divide = function(num1,num2){
    if(num2 == 0){
        return "cannot divide by zero";
    }
    return num1 / num2;
    
};