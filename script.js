/*
const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve("script loaded");
    };
    document.body.append(script);
  });
};
const a = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
);
a.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err.message);
});
*/

/*
problem 3

let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 3000);
  });
};
let a = async () => {
  try {
    let c = await p();
    console.log(c);
  } catch (error) {
    console.log(error.message);
  }
};

a();

*/
/*
let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
};
let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};
let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(40);
    }, 4000);
  });
};

const run = async () => {
  console.time("run");
  return Promise.all([p1(), p2(), p3()]);
  let a1 = await p1();
  let a2 = await p2();
  let a3 = await p3();
  console.log(a1, a2, a3);
  console.timeEnd("run");
};
run()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
*/
/*
let options = {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    title: "ismail",
    body: "lorem ipsum dollor sit amit null",
    userid: 212,
  }),
};
const fetchapi = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts", options)
    .then((response) => {
      return response.json();
    })
    .then((value) => {
      console.log(value);
    });
};

const fetchapi2 = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((value) => {
      console.log(value);
    });
};
let mainfunc = async () => {
  await fetchapi();
  await fetchapi2();
  return await Promise.all([func1,func2]);
};
mainfunc()
.then((value)=>{
  console.log();
})
*/
/*
document.cookie = "name=ismail";
document.cookie = "name2=none";
let key = prompt("add a key: ");
let value = prompt("add a value: ");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

document.cookie = "name2=none";
console.log(document.cookie);
*/

/*
let a = async () => {
  return new Promise((resolve, reject) => {
    resolve("welcome to hacking ....");
  });
};
let c = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("set user name ....");
    }, 3000);
  });
};
let d = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hacking ismail hossain ....");
    }, 3000);
  });
};

const callfunc = async () => {
  let alpha = await a();
  console.log(`%c ${alpha}`, "background:black; color:green");
  let delta = await c();
  console.log(`%c ${delta}`, "background:black; color:green");
  let gama = await d();
  console.log(`%c ${gama}`, "background:black; color:green");
};
callfunc();
*/
