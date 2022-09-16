const express = require('express')
const router = express.Router()
const {sum, subtract , divide, multiply} = require('../services/calculation.service');
const joi = require('joi')
const validator = require('express-joi-validation').createValidator({})

const querySchema = joi.object().keys({
    number1: joi.number().required(),
    number2: joi.number().required()
}).required()

router.post('/', validator.body(querySchema), async (req,res)=>{
    const number1 = req.body.number1;
    const number2 = req.body.number2;
    try {
        let resultSum = sum(number1,number2);
        let resultSub = subtract(number1,number2);
        let resultDivide = divide(number1,number2);
        let resultMulti = multiply(number1,number2);
        res.send({summation: resultSum, subtraction: resultSub, division: resultDivide, multiplication: resultMulti})
    } catch (error) {
        res.status(400).send({
            error:error.message
        })
    }
})

module.exports = router;