// function createLikeCounter() {
//   let likes = 0;

//   return function () {
//     likes++;
//     document.getElementById('count').textContent = likes;
//   };
// }

// const like = createLikeCounter();

// document.getElementById('likeBtn').addEventListener('click', like);

// 2222222

// function greet(greetingWord) {
//   return function (userName) {
//     return `${greetingWord}, ${userName}`;
//   };
// }

// const formalGreet = greet('Здравствуйте');
// const friendlyGreet = greet('Привет');

// const nameInput = document.getElementById('nameInput');
// const greetingText = document.getElementById('greetingText');

// document.getElementById('formalBtn').addEventListener('click', () => {
//   const name = nameInput.value.trim() || 'Гость';
//   greetingText.textContent = formalGreet(name);
// });

// document.getElementById('friendlyBtn').addEventListener('click', () => {
//   const name = nameInput.value.trim() || 'Гость';
//   greetingText.textContent = friendlyGreet(name);
// });


// 33


// function sumTo(n) {

//     if (n <= 1) {
//         return n;
//     }

//     return n + sumTo(n - 1);
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const calcBtn = document.getElementById('calcBtn');
//     const numInput = document.getElementById('numInput');
//     const sumResult = document.getElementById('sumResult');

//     calcBtn.addEventListener('click', () => {
//         const n = parseInt(numInput.value, 10);

//         if (isNaN(n) || n < 0) {
//             sumResult.textContent = 'Введите число >= 0';
//             return;
//         }

    
//         sumResult.textContent = sumTo(n);
//     });
// });
 
// бай баай