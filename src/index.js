export default fn => {
  return Object.defineProperty(
    function() {
      return fn.apply(this, arguments).then(response => [undefined, response], err => [err]);
    },
    'name',
    { value: fn.name }
  );
};
