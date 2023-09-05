/**
 * @overload Generator range [start, stop) with step
 * @param {number} start
 * @param {number} stop
 * @param {number} step
 * @returns {Generator<number>}
 *
 * @overload Generator range [start, stop) with step = 1
 * @param {number} start
 * @param {number} stop
 * @returns {Generator<number>}
 *
 * @overload Generator range [0, stop) with step = 1
 * @param {number} stop
 * @returns {Generator<number>}
 */
export function* range(a: number, b: number | undefined = undefined, step = 1) {
  const [start, stop] = b === undefined ? [0, a] : [a, b];
  for (let i = start; i < stop; i += step) {
    yield i;
  }
}

export function* enumerate<T>(iter: Iterable<T>): Iterable<[number, T]> {
  let i = 0;
  for (const item of iter) {
    yield [i, item];
    i++;
  }
}
