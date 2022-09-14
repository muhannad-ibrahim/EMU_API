const express = require('express')
const router = express.Router()
const {Sum, Subtract } = require('../logic/calcuLogic');
const joi = require('joi')
const validator = require('express-joi-validation').createValidator({})

const querySchema = joi.object().keys({
    number1: joi.number().required(),
    number2: joi.number().required()
}).required()

router.post('/', validator.body(querySchema), async (req,res)=>{
    const number1 = req.body.number1;
    const number2 = req.body.number2;
    let resultSum = Sum(number1,number2);
    let resultSub = Subtract(number1,number2);
    
    res.send({sum: resultSum, subtract: resultSub})
})

module.exports = router;