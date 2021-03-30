import  * as util  from 'util'
const wait = util.promisify(setTimeout);


export { secretAlgorithm }

function getRandBetween(a,b) {
  return Math.floor(Math.random()*b)*a;
};

// function now() {
//   const now = new Date()
//   return now.getTime()
// }

async function secretAlgorithm() {
  console.time("secretAlgorithm");
  await wait(getRandBetween(1,7)*1000);
  console.timeEnd("secretAlgorithm")
}
