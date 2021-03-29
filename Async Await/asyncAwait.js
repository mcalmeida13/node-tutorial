// function wait(ms) {
// 			return new Promise(function(resolve) {
// 				console.log(this);
// 				window.setTimeout(function() {
// 					resolve();
// 				}, ms);
// 			});
// 		};


// function wait(ms) {
// 			return new Promise(function(resolve) {
// 				console.log(this);
// 				window.setTimeout(function() {
// 					resolve();
// 				}, ms);
// 			});
// 		};


// async function process01() {
//   console.log("Process 01 started");
//   throw new Error("Process 01 failed")
//   console.time("Process 01 ended");
//   await wait(5000);
//   console.timeEnd("Process 01 ended");
//   console.log();
//   return "process01-value";
// }

// async function process02() {
//   console.log("Process 02 started");
//   console.time("Process 02 ended");
//   await wait(3000);
//   console.timeEnd("Process 02 ended");
//   console.log();
//   return "process02-value";
// }

// async function main () {
//   try {
//     console.time("Total running time");
//     const value01 = await process01();
//     const value02 = await process02();
    
//     console.log("Process 01 returned: ", value01);
//     console.log("Process 02 returned: ", value02);
    
//     console.log();
    
//     console.timeEnd("Total running time");
//   } catch(error) {
//     console.log("error", error)
//   }
// }

// main();

// function wait(ms) {
// 			return new Promise(function(resolve) {
// 				console.log(this);
// 				window.setTimeout(function() {
// 					resolve();
// 				}, ms);
// 			});
// 		};



// async function main () {
//   try {
//     console.time("Total running time");
//     const value01 = await process01();
//     const value02 = await process02();
    
//     console.log("Process 01 returned: ", value01);
//     console.log("Process 02 returned: ", value02);
    
//     console.log();
    
//     console.timeEnd("Total running time");
//   } catch(error) {
//     console.log("error", error)
//   }
// }

// main();

// function wait(ms) {
// 			return new Promise(function(resolve) {
// 				console.log(this);
// 				window.setTimeout(function() {
// 					resolve();
// 				}, ms);
// 			});
// 		};


// async function process01() {
//   console.log("Process 01 started");
//   console.time("Process 01 ended");
//   await wait(5000);
//   console.timeEnd("Process 01 ended");
//   console.log();
//   return "process01-value";
// }

// async function process02() {
//   console.log("Process 02 started");
//   console.time("Process 02 ended");
//   await wait(3000);
//   console.timeEnd("Process 02 ended");
//   console.log();
//   return "process02-value";
// }


// // Here the process will happen in parallel
// async function main () {
//   try {
//     console.time("Total running time");
//     const data = await Promise.all([process01(),process02()]);
//     console.log();
    
//     console.log("Process 01 returned: ", data[0]);
//     console.log("Process 02 returned: ", data[1]);
    
//     console.log();
    
//     console.timeEnd("Total running time");
//   } catch(error) {
//     console.log("error", error)
//   }
// }

// main();


// function wait(ms) {
// 			return new Promise(function(resolve) {
// 				console.log(this);
// 				window.setTimeout(function() {
// 					resolve();
// 				}, ms);
// 			});
// 		};


// async function process01() {
//   console.log("Process 01 started");
//   throw new Error("Process 01 Failed")
//   console.time("Process 01 ended");
//   await wait(5000);
//   console.timeEnd("Process 01 ended");
//   console.log();
//   return "process01-value";
// }

// async function process02() {
//   console.log("Process 02 started");
//   console.time("Process 02 ended");
//   await wait(3000);
//   console.timeEnd("Process 02 ended");
//   console.log();
//   return "process02-value";
// }


// // Here the process will happen in parallel
// async function main () {
//   try {
//     console.time("Total running time");
//     const data = await Promise.all([process01(),process02()]);
//     console.log();
    
//     console.log("Process 01 returned: ", data[0]);
//     console.log("Process 02 returned: ", data[1]);
    
//     console.log();
    
//     console.timeEnd("Total running time");
//   } catch(error) {
//     console.log("error", error)
//   }
// }

// main();

// function wait(ms) {
// 			return new Promise(function(resolve) {
// 				console.log(this);
// 				window.setTimeout(function() {
// 					resolve();
// 				}, ms);
// 			});
// 		};


// async function process01() {
//   try{ 
//     console.log("Process 01 started");
//     await wait(100);
//     throw new Error("Process 01 Failed")
//     console.time("Process 01 ended");
//     await wait(5000);
//     console.timeEnd("Process 01 ended");
//     console.log();
//     return "process01-value";
//     } catch(error) {
//       console.log(error)
//     }
// }

// async function process02() {
//   console.log("Process 02 started");
//   console.time("Process 02 ended");
//   await wait(3000);
//   console.timeEnd("Process 02 ended");
//   console.log();
//   return "process02-value";
// }


// // Here the process will happen in parallel
// async function main () {
//   try {
//     console.time("Total running time");
//     const data = await Promise.all([process01(),process02()]);
//     console.log();
    
//     console.log("Process 01 returned: ", data[0]);
//     console.log("Process 02 returned: ", data[1]);
    
//     console.log();
    
//     console.timeEnd("Total running time");
//   } catch(error) {
//     console.log("error", error)
//   }
// }

// main();
// --------------------------------------------------------------------------
/*Função tempo*/

// function now() {
//   const now = new Date()
//   return now.getTime()
// }

// /*Função wait*/

// function wait(ms) {
// 			return new Promise(function(resolve) {
// 				console.log(this);
// 				window.setTimeout(function() {
// 					resolve();
// 				}, ms);
// 			});
// 		};

// function getRandBetween(a,b) {
//   return Math.floor(Math.random()*b)*a;
// }

// /*Algoritmo secreto*/

// async function secretAlgorithm() {
//   console.time("secretAlgorithm");
//   await wait(getRandBetween(1,7)*1000);
//   console.timeEnd("secretAlgorithm")
// }

// const NUMBER_OF_TESTS = 10;

// async function main() {
//   try {
//     let totalTime = 0;
    
//     for (let i =0; i< NUMBER_OF_TESTS; i++) {
//       const start = now();
//       await secretAlgorithm();
//       const end = now();
//       totalTime = (end - start);
//     }
    
//     console.log();
    
//     console.log("Total Time:", totalTime);
//     console.log("Number of retries:", NUMBER_OF_TESTS);
//     console.log("Average running time: ", (totalTime/NUMBER_OF_TESTS).toFixed(3));
//   } catch(error) {
//     console.log("error",error)
//   }
// }

// main();
//-------------------------------------------------------

// function getRandBetween(a,b) {
//   return Math.floor(Math.random()*b)*a;
// };

// /*Função wait*/

// function wait(ms) {
// 			return new Promise(function(resolve) {
// 				console.log(this);
// 				window.setTimeout(function() {
// 					resolve();
// 				}, ms);
// 			});
// 		};

// class PowerPlant {
//   constructor(id) {
//     this.id = id;
//   }
  
//   async turnOn() {
//      console.log(`Turning ON Power Plant ${this.id}`);
//      console.time(`Power Plant ${this.id} turned on`);
//      await wait(getRandBetween(1,4)*1000);
//      console.timeEnd(`Power Plant ${this.id} turned on`);
//      console.log(); 
//   }
    
  
//   async turnOff() {
//       console.log(`Turning OFF Power Plant ${this.id}`);
//       console.time(`Power Plant ${this.id} turned off`);
//       await wait(getRandBetween(1,4)*500);
//       console.timeEnd(`Power Plant ${this.id} turned off`);
//       console.log();
//   }
// };

// /*Função tempo*/

// function now() {
//    const now = new Date()
//    return now.getTime()
//  };


// async function main(){
//   try {
//     const powerPlants = [];
    
//     powerPlants.push(new PowerPlant("01"));
//     powerPlants.push(new PowerPlant("02"));
//     powerPlants.push(new PowerPlant("03"));
//     powerPlants.push(new PowerPlant("04"));
//     powerPlants.push(new PowerPlant("05"));
    
//     //Turn all of them On
//     //NÃO FUNCIONA ESSA MERDA
//     // powerPlants.forEach(powerPlant => {
//     //   await powerPlant.turnOn();
//     // });
    
//     for (powerPlant of powerPlants) {
//       await powerPlant.turnOn();
//     }
    
//     //Turn all of them Off
    
// //     powerPlants.forEach(powerPlant => {
// //       await powerPlant.turnOff();
// //     });
//     for (powerPlant of powerPlants) {
//       await powerPlant.turnOff();
//     }
    
    
//   } catch(error) {
//     console.log('error', error);    
//   }
// }

// main();

// // -------------------------------------------------------------------

// /*Função tempo*/

// function now() {
//   const now = new Date()
//   return now.getTime()
// }

// /*Função wait*/

// function wait(ms) {
// 			return new Promise(function(resolve) {
// 				console.log(this);
// 				window.setTimeout(function() {
// 					resolve();
// 				}, ms);
// 			});
// 		};

// function getRandBetween(a,b) {
//   return Math.floor(Math.random()*b)*a;
// }

// /*Algoritmo secreto*/

// async function secretAlgorithm() {
//   console.time("secretAlgorithm");
//   await wait(getRandBetween(1,7)*1000);
//   console.timeEnd("secretAlgorithm")
// }

// const NUMBER_OF_TESTS = 10;

// async function main() {
//   try {
//     let retries = 0;
//     let totalTime = 0;
    
//     while (retries < NUMBER_OF_TESTS) {
//       const start = now();
//       await secretAlgorithm();
//       const end = now();
//       totalTime = (end - start);
      
//       retries++;
//     }
    
//     console.log();
    
//     console.log("Total Time:", totalTime);
//     console.log("Number of retries:", retries);
//     console.log("Average running time: ", (totalTime/retries).toFixed(3));
//   } catch(error) {
//     console.log("error",error)
//   }
// }

// main();

function wait(ms) {
    return new Promise(function(resolve) {
        console.log(this);
        window.setTimeout(function() {
            resolve();
        }, ms);
    });
};

async function teste() {
try {
let resultado = await wait(5000);
return console.log('Chegou');
} catch(error){
console.log(error,'error')
}
}

teste();