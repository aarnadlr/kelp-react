
// NUM with 1 PLACES:
var minNumber0 = 1;
var maxNumber0 = 9;
var randomNumber0 = Math.floor((Math.random() * (maxNumber0 - minNumber0 + 1)) + minNumber0);

// NUM with 2 PLACES:
var minNumber1 = 10;
var maxNumber1 = 99;
var randomNumber1 = Math.floor((Math.random() * (maxNumber1 - minNumber1 + 1)) + minNumber1);

// NUM with 3 PLACES:
var minNumber2 = 100;
var maxNumber2 = 999;
var randomNumber2 = Math.floor((Math.random() * (maxNumber2 - minNumber2 + 1)) + minNumber2);

// NUM with 4 PLACES:
var minNumber3 = 1000;
var maxNumber3 = 9999;
var randomNumber3 = Math.floor((Math.random() * (maxNumber3 - minNumber3 + 1)) + minNumber3);

// NUM with 5 PLACES:
var minNumber4 = 10000;
var maxNumber4 = 99999;
var randomNumber4 = Math.floor((Math.random() * (maxNumber4 - minNumber4 + 1)) + minNumber4);


const settings = {
    start: randomNumber0,
    count: randomNumber1,
    //Milliseconds: 1 min -> 60,000
    //Milliseconds: 3 mins -> 180,000
    //Milliseconds: 5 mins -> 300,000
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};

const settings0 = {
    start: randomNumber0,
    count: randomNumber2,
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};

const settings1 = {
    start: randomNumber0,
    count: randomNumber3,
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};
const settings2 = {
    start: randomNumber0,
    count: randomNumber4,
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};
const settings3 = {
    start: randomNumber1,
    count: randomNumber2,
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};
const settings4 = {
    start: randomNumber1,
    count: randomNumber3,
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};
const settings5 = {
    start: randomNumber1,
    count: randomNumber4,
    //Milliseconds: 1 min -> 60,000
    //Milliseconds: 3 mins -> 180,000
    //Milliseconds: 5 mins -> 300,000
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};
const settings6 = {
    start: randomNumber2,
    count: randomNumber3,
    //Milliseconds: 1 min -> 60,000
    //Milliseconds: 3 mins -> 180,000
    //Milliseconds: 5 mins -> 300,000
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};
const settings7 = {
    start: randomNumber2,
    count: randomNumber4,
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};

const settings8 = {
    start: randomNumber3,
    count: randomNumber4,
    duration: 180000,
    decimals: 2,
    useGroup: true,
    animation: 'up'
};

export { settings, settings0, settings1, settings2, settings3, settings4, settings5, settings6, settings7, settings8 }