import destructure from '..';

test('given destructure(); when the fn resolves; then it should return;', async () => {
  const expected = 'Hello';
  const task = () => Promise.resolve(expected);
  const destructured = destructure(task);
  const [error, actual] = await destructured();
  expect(actual).toBe(expected);
  expect(error).toBeUndefined();
  expect(destructured).toHaveProperty('name', 'task');
});

test('given destructure(); when the fn rejects; then it should return;', async () => {
  const expected = new Error({ message: 'Some error occured' });
  const task = () => Promise.reject(expected);
  const destructured = destructure(task);
  const [error, actual] = await destructured();
  expect(actual).toBeUndefined();
  expect(error).toHaveProperty('message', expected.message);
  expect(destructured).toHaveProperty('name', 'task');
});
