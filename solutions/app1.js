const user = {
  firstName: 'John',
  lastName: 'Doe',
};

const {firstName="unknown", lastName="unknown", job="unknown"}=user;

export {
  firstName,
  lastName,
  job,
};

console.log(firstName, lastName, job);
//

// export {
//   firstName,
//   lastName,
//   job,
// };
