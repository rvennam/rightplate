// TODO: validation
const valid = (firstname, lastname, avatar) => (!!(firstname && lastname && avatar));

function main(params) {
  const { firstname, lastname, avatar } = params;
  if (!valid(firstname, lastname, avatar)) {
    return { message: 'validation failed' };
  }
  return {
    doc: {
      id: (new Date()).getTime().toString(),
      firstname,
      lastname,
      avatar,
    },
  };
}
exports.main = main;
