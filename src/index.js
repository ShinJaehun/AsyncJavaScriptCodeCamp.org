import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// https://youtu.be/ZYb_ZU8LNxs
// https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

// synchronous
/*
console.log(" I ");
console.log(" eat ");
console.log(" spoon ");
console.log(" ice cream ");
console.log(" with a");
*/

// Asynchronous
/*
console.log(" I ");
console.log(" eat ");

setTimeout(() => {
  console.log(" ice cream ");
}, 3000);

console.log(" with a");
console.log(" spoon ");
*/
//setTimeout(() => {});

// arrow function
//function abcdef(a, b, c, d) {}
//let abcde = (a, b, c, d) => {};

// 원래 JS는 위에서 아래로 실행되는데
/*
function one() {
  console.log(" step1 comp ");
}
function two() {
  console.log(" step2 ");
}

one();
two();

two();
one();
*/

// callback
/*
function one(call_two) {
  // console.log(" step1 completed. please call step 2");
  // call_two();
  // 이렇게 순서가 바뀌면 step2를 먼저 실행하겠지?
  call_two();
  console.log(" step1 completed. please call step 2");
}

function two() {
  console.log(" step2 ");
}

one(two);
*/

// ice cream business proto type
/*
let order = (call_production) => {
  console.log("order placed, please call production");
  call_production();
};

let production = () => {
  console.log("order received, starting production");
};

order(production);
*/

/*
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"]
};

console.log(stocks.Fruits[2]);
*/

// ice cream business : callback hell
/*
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);
    call_production();
  }, 2000);
  //call_production();
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("the fruit has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("the machine was started");
          setTimeout(() => {
            console.log(`ice cream was placed on ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added`);
              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order("0", production);
*/

// to avoid from callback hell, promise

/*
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;
//let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("the fruit was chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    );
  })
  .then(() => {
    return order(1000, () => console.log("the machine was started"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`ice cream placed on ${stocks.holder[0]}`)
    );
  })
  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was added`));
  })
  .then(() => {
    return order(2000, () => console.log("serve ice cream"));
  })
  .catch(() => {
    console.log("customer left");
  })
  .finally(() => {
    console.log("day ended, shop is closed");
  });

  */

// async/await

/* typical promise

let order = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve()
    } else {
      reject()
    }
  })
}

order()
.then()
.then()
.then()
.catch()
.finally()
*/

// 이 부분 강의 잘 못들었음... 따로 공부할 필요가 있다.

/*

async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc doesn't exist", error);
  } finally {
    console.log("runs code anyways");
  }
}

order().then(() => {
  console.log("hello");
});

*/

// async await test
/*

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which topping would you love?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log("a");
  console.log("b");
  console.log("c");

  await toppings_choice();

  console.log("d");
  console.log("e");
}

kitchen();
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders");
*/

// ice cream async/await
/*

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"]
};

let is_shop_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]}`);
    await time(0);
    console.log("start the production");
    await time(2000);
    console.log("cut the fruit");
    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
    await time(1000);
    console.log("start the machine");
    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);
    await time(2000);
    console.log("serve ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed");
  }
}

kitchen();
*/
