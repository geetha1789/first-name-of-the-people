const peopleName = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peopleName) => {
  return getFirstNames(peopleName);
};
module.exports = getPeopleInCity;
