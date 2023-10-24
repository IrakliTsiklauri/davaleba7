// const mySetTimOut = (delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delay);
//   });
// };

// mySetTimOut(2000).then(() => console.log("time"));

// function makeToys(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.1) {
//         resolve("undefected");
//       } else {
//         reject("defected");
//       }
//     }, delay * 1000);
//   });
// }

// function sellToys(status, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (status === "undefected") {
//         if (Math.random() > 0.7) {
//           resolve("Toy has been sold");
//         } else {
//           reject("Toy was unsuccessful");
//         }
//       }
//     }, delay * 1000);
//   });
// }

// function deliverToys(status, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (status === "Toy has been sold") {
//         resolve("delivered");
//       } else {
//         reject("not delivered");
//       }
//     }, delay * 1000);
//   });
// }

// makeToys(3)
//   .then((status) => sellToys(status, 1))
//   .then((status) => deliverToys(status, 2))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
