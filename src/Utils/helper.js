import { Color } from "@grapecity/wijmo";

// generate number between min & max
export function randomNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// generate an array with X number between min & max
export function generateRandomNumber(x) {
  return Array.from({ length: x }, () => randomNumberBetween(-100, 100));
}

// generate an array for svg box with {number,color}
export function generateColorSvg(x) {
  const numbers = generateRandomNumber(x);
  const colors = interpolate(numbers);
  console.log("colors", colors, "x", x);
  return Array.from({ length: x }, (_, i) => ({
    color: colors[i],
    number: numbers[i],
  }));
}

// From X number between -100 & 100 get color with rule of three
export function pourcentageToRgb(arrayOfRandomNumbers) {
  const maxColorLevel = 255;
  const maxPourcentage = 100;
  return arrayOfRandomNumbers.map((number) => {
    const x = Math.round((number * maxColorLevel) / maxPourcentage);
    return x > 0
      ? `rgb(${number} , 0 , 0)`
      : `rgb(0 , ${Math.abs(number)} , 0)`;
  });
}

export function interpolate(x) {

  const c1 = new Color("green"),
    c2 = new Color("red");

  // calculate new gradient
  return Array.from({ length: x.length }, (_, i) =>
    Color.interpolate(c1, c2, i / x.length)
  );
}
