export function randomNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function generateRandomNumber(x) {
  return Array.from({ length: x }, () => randomNumberBetween(-100, 100));
}

export function generateColorSvg(x) {
  const numbers = generateRandomNumber(x);
  const colors = pourcentageToRgb(numbers);
  return Array.from({ length: x }, (_, i) => ({
    color: colors[i],
    number: numbers[i],
  }));
}

function pourcentageToRgb(arrayOfRandomNumbers) {
  const maxColorLevel = 255;
  const maxPourcentage = 100;
  return arrayOfRandomNumbers
    .map((number) => Math.round((number * maxColorLevel) / maxPourcentage))
    .map((number) =>
      number > 0 ? `rgb(${number} , 0 , 0)` : `rgb(0 , ${Math.abs(number)} , 0)`
    );
}
