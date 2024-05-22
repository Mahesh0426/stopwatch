let counter = 0;
let interval;
let timer_on = 0;

const timedCount = () => {
  document.getElementById("demo").value = "00:" + counter;
  counter++;
};

const startCount = () => {
  if (!timer_on) {
    timer_on = 1;
    interval = setInterval(timedCount, 1000);
  }
};

const pauseCount = () => {
  clearInterval(interval);
  timer_on = 0;
};

function resetCount() {
  clearInterval(interval);
  timer_on = 0;
  counter = 0;
  document.getElementById("demo").value = "00:00";
}

const average = numbers.reduce((acc, curr, index, array) => {
  acc += curr; // Add the current value to the accumulator
  if (index === array.length - 1) {
    // Check if this is the last element
    return acc / array.length; // Calculate the average
  }
  return acc; // Return the running total if not the last element
}, 0);
console.log(average); // Output: 3
