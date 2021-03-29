import { process01, process02 } from './processes.js';

main();

// Here the process will happen in parallel
async function main () {
  try {
    console.time("Total running time");
    const data = await Promise.all([process01(),process02()]);
    console.log();
    
    console.log("Process 01 returned: ", data[0]);
    console.log("Process 02 returned: ", data[1]);
    
    console.log();
    
    console.timeEnd("Total running time");
  } catch(error) {
    console.log("error", error)
  }
}