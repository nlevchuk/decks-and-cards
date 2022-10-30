export const loadFixturesData = (name) => {
  const data = require(`../fixtures/${name}`);
  return data;
};
