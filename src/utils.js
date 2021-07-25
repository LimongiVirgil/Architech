/** Transform a number between 0 and 1 into a percentage number (0.8 => 80%)
 * @param { Number{0..1} } number
 * @return { String }
*/
export function formatPercentage(number) {
  return Math.round(number * 100 * 100) / 100 + " %";
}

/** Transform Object into Array
 * @param { Object } obj
 * @return { Array }
*/
export function hydratation(obj) {
  const hydratedData = [];

  for (const [key, value] of Object.entries(obj)) {
    hydratedData.push(value)
  }
  return hydratedData;
}

/** Capitalize the first letter of a string
 * @param { String } string
 * @return { String }
*/

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
