import isAbsoluteArray from './isAbsoluteArray';

/**
 * Iterates an array to check if it's a `pathArray`
 * with all segments are in non-shorthand notation
 * with absolute values.
 *
 * @param {string | SVGPathCommander.pathArray} path the `pathArray` to be checked
 * @returns {boolean} iteration result
 */
export default function isNormalizedArray(path) {
  // @ts-ignore -- `isAbsoluteArray` also checks if it's `Array`
  return isAbsoluteArray(path) && path.every((seg) => 'ACLMQZ'.includes(seg[0]));
}
