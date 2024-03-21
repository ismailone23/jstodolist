async function newFunction() {
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 1 resolved");
    }, 2000);
  });
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 2 resolved");
    }, 4000);
  });
  console.log("resolving is pending");
  let pr1 = await promise1;
  console.log("resolving promise 2");
  let pr2 = await promise2;
  console.log("done 💵");
  return [pr1, pr2];
}
newFunction().then((value) => {
  console.log(value);
});
