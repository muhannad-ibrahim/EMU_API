exports.Sum = function(num1,num2){
    return num1+num2;
};
exports.Subtract = function(num1,num2){
    return num1-num2;
};
exports.Multiplication = function(num1,num2){
    return num1*num2;
};
exports.Divide = function(num1,num2){
    if(num2 == 0){
        return "cannot divide by zero";
    }
    else{
        return num1 / num2;
    }
};