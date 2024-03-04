/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (object, ...fields) => {
  const copyOfObj = {};

  for (const key in object) {
    if (fields.includes(key)) {
      copyOfObj[key] = object[key];
    }
  }

  return copyOfObj;
};
