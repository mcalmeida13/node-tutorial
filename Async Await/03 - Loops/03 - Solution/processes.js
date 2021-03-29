import  * as util  from 'util'
const wait = util.promisify(setTimeout);


export { process01, process02 }

async function process01() {
  try{
      console.log("Process 01 started");
      throw new Error("Process 01 failed")
      console.time("Process 01 ended");
      await wait(5000);
      console.timeEnd("Process 01 ended");
      console.log();
      return "process01-value";
    } catch(error) {
      console.log("Error: ", error)
    }
}

async function process02() {
  try{
    console.log("Process 02 started");
    console.time("Process 02 ended");
    await wait(3000);
    console.timeEnd("Process 02 ended");
    console.log();
    return "process02-value";
  } catch(error) {
      console.log("Error: ", error)
  }
}
