const sum = (num1,num2) => num1 + num2;

const PI = 3.14;

class SomeMathObject{
    constructor(){
        console.log("object created")
    }
}

export default {sum, PI , SomeMathObject }

/*
"""
Aqui exporta um a um
"""
*/
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObject=SomeMathObject;

/*
"""
Aqui exporta todos de uma vez
"""
*/
// module.exports = {sum:sum, PI:PI, SomeMathObject:SomeMathObject}