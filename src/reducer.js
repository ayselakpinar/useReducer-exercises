function reducer(state, action) {
  return state + action;
}
const res = [1, 2, 3].reduce(reducer);
console.log(res);
