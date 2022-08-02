function isMultipleOf3Or5(num) {
  return new Promise((res, rej) => {
    if (num % 3 === 0 && num % 5 === 0) return res('FizzBuzz');
    if (num % 3 === 0) return res('Fizz');
    if (num % 5 === 0) return res('Buzz');
    return rej(num)
  })
}

isMultipleOf3Or5(7)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
