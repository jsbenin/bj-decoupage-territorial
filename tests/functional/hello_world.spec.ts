import { test } from '@japa/runner'

test.group('Hello world', () => {
  test('example test', async ({ assert }) => {
    assert.isTrue(true)
  })
})
