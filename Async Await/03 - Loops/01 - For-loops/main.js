import { secretAlgorithm } from './processes.js';
import { createRequire } from 'module';
const require = createRequire();
const now = require('performance-now');

main();
const NUMBER_OF_TESTS = 10;

async function main() {
  try {
    let totalTime = 0;
    
    for (let i =0; i< NUMBER_OF_TESTS; i++) {
      const start = now();
      await secretAlgorithm();
      const end = now();
      totalTime = (end - start);
    }
    
    console.log();
    
    console.log("Total Time:", totalTime);
    console.log("Number of retries:", NUMBER_OF_TESTS);
    console.log("Average running time: ", (totalTime/NUMBER_OF_TESTS).toFixed(3));
  } catch(error) {
    console.log("error",error)
  }
}

