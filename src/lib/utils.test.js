import {partial, pipe} from './utils'

const add = (a, b) => a + b
const addThree = (a, b, c) => a + b + c
const inc = (num) => num + 1
const dbl = (num) => num * 2

test('partial applies the first argument ahead of time', () => {
  const inc = partial(add, 1)
  const result = inc(2) //expect 3
  expect(result).toBe(3)
})

test('partial applies the multiple arguments ahead of time', () => {
  const inc = partial(addThree, 1, 3)
  const result = inc(2) //expect 6
  expect(result).toBe(6)
})

test('pipe passes the results of inc to dbl', () => {
  const pipeline = pipe(inc, dbl) // => dbl(inc(2)) OR g(f(...args))
  const result = pipeline(2)
  expect(result).toBe(6)
})

test('pipe passes the results of dbl to inc', () => {
  const pipeline = pipe(dbl, inc) // => inc(dbl(2))
  const result = pipeline(2)
  expect(result).toBe(5)
})

test('pipe works with more than 2 functions', () => {
  const pipeline = pipe(add, inc, dbl, inc) // => inc(dbl(inc(add(1,2))))
  const result = pipeline(1,2)
  expect(result).toBe(9)
})
