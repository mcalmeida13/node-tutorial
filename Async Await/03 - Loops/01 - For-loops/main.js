import { secretAlgorithm} from './processes.js';
let perf_hooks = await import('perf_hooks');


const NUMBER_OF_TESTS = 10;
main();

async function main() {
  try {
    let totalTime = 0;
    
    for (let i =0; i< NUMBER_OF_TESTS; i++) {
      const start = perf_hooks.performance.now();
      await secretAlgorithm();
      const end = perf_hooks.performance.now();
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

