const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers() {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers() {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function(value) {
        return value * multiplier
    }
}

function fareDoubler(value) {
    return value * 2
}

function fareTripler(value) {
    return value * 3
}

const selectDifferentDrivers = function(drivers, returnDrivers) {
    return returnDrivers(drivers)
}