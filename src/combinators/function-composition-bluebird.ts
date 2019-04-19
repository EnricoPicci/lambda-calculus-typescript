// left function composition or Bluebird combinator
// B := λxyz. x (y z)
//
export const B = x => y => z => x(y(z));
B.toString = () => 'Bluebird combinator or left function composition';
