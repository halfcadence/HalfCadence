// media queries
// converts number arguments to rems

export const devices = {
  tallmobile: 30,
  mobile: 50
};

export function widerThan(width) {
  return `@media screen and (min-resolution: 1dppx) and (max-resolution: 1.9dppx) and (min-width: ${width}rem),` +
    `screen and (min-resolution: 2dppx) and (max-resolution: 2.9dppx) and (min-width: ${2 * width}rem),` +
    `screen and (min-resolution: 3dppx) and (min-width: ${3 * width}rem)` +
    `screen and (-webkit-min-device-pixel-ratio: 1dppx) and (-webkit-max-device-pixel-ratio: 1.9dppx) and (min-width: ${width}rem),` +
    `screen and (-webkit-min-device-pixel-ratio: 2dppx) and (-webkit-max-device-pixel-ratio: 2.9dppx) and (min-width: ${2 * width}rem),` +
    `screen and (-webkit-min-device-pixel-ratio: 3dppx) and (min-width: ${3 * width}rem)`;
}

export function narrowerThan(width) {
  return `@media screen and (min-resolution: 1dppx) and (max-resolution: 1.9dppx) and (max-width: ${width}rem),` +
    `screen and (min-resolution: 2dppx) and (max-resolution: 2.9dppx) and (max-width: ${2 * width}rem),` +
    `screen and (min-resolution: 3dppx) and (max-width: ${3 * width}rem)` +
    `screen and (-webkit-min-device-pixel-ratio: 1dppx) and (-webkit-max-device-pixel-ratio: 1.9dppx) and (max-width: ${width}rem),` +
    `screen and (-webkit-min-device-pixel-ratio: 2dppx) and (-webkit-max-device-pixel-ratio: 2.9dppx) and (max-width: ${2 * width}rem),` +
    `screen and (-webkit-min-device-pixel-ratio: 3dppx) and (max-width: ${3 * width}rem)`;
}
