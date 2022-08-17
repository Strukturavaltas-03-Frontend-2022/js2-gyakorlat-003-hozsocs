const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const {
  firstName: f = "unknown", 
  lastName: l = "unknown", 
  job: j = "unknown" 
} = user;

console.log( f, l, j);

export {
  f,
  l,
  j,
};