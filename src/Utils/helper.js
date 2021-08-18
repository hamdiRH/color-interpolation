import { Color } from "@grapecity/wijmo";

// generate number between min & max
export function randomNumberBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// generate an array with X number between min & max
export function generateArrayOfRandomNumber(x) {
  return Array.from({ length: x }, () => randomNumberBetween(-100, 100));
}


// generate an array for svg box with item {number,color}
export function generateColorSvg(x) {
  const numbers = generateArrayOfRandomNumber(x);
  const colors = interpolate(numbers);
  return Array.from({ length: x }, (_, i) => ({
    color: colors[i],
    number: numbers[i],
  }));
}

// generate an array of interpolate color
export function interpolate(array) {
  const c1 = new Color("green"),
    c2 = new Color("red");

  // calculate new gradient
  return Array.from({ length: array.length }, (_, i) =>
    Color.interpolate(
      c1,
      c2,
      array
        .slice()
        .sort((a, b) => a - b)
        .indexOf(array[i]) / array.length
    )
  );
}
