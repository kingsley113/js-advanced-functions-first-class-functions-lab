// Code your solution in this file!
function returnFirstTwoDrivers(array) {
  return array.slice(0, 2);
}

function returnLastTwoDrivers(array) {
  return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

const fareDoubler = function (fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function (fare) {
  return createFareMultiplier(3)(fare);
};

function selectDifferentDrivers(array, selector) {
  return selector(array);
}
