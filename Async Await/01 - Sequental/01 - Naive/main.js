import { process01, process02 } from './processes.js';

main();
// We have two processes and we want to run them sequentially
async function main () {
  try {
    console.time("Total running time");
    let value01 = await process01();
    let value02 = await process02();
    
    console.log("Process 01 returned: ", value01);
    console.log("Process 02 returned: ", value02);
    
    console.log();
    // console.log("Total Running Time");
    console.timeEnd("Total running time");
  } catch(error) {
    console.log("error", error)
  }
}
