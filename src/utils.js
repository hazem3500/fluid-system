const _pipe = (f, g) => (...args) => g(f(...args));
export const pipe = (...fns) => fns.reduce(_pipe);

export const isMeasurement = measurement => {
  return !isNaN(parseInt(measurement));
};

export const getUnit = measurement => {
  if (!measurement) {
    return null;
  }

  if (typeof measurement === "number") {
    return "px";
  }

  return measurement.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/)[2];
};

export const stripUnit = measurement => parseFloat(measurement);

export const buildMediaQuery = breakpoint =>
  `@media screen and (min-width: ${breakpoint})`;
