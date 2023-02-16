const newYears = "1 Jan 2024";

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = (newYearsDate - currentDate) * 1000;
  console.log(seconds);

  console.log(newYearsDate - currentDate);
}

countDown();

setInterval(countDown, 1000);
