import { test } from '@japa/runner'

test.group('Hello world', () => {
  test('example', async ({ assert }) => {
    assert.isTrue(true)
  })
})
