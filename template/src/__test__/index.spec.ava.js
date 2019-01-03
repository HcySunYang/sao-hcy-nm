import test from 'ava'
import sum from '..'

test('adds 1 + 2 to equal 3', t => {
  t.is(sum(1, 2), 3)
})
