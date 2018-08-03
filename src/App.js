// REFERENCE: RANDOM NUMBER REACT:
// https://gist.github.com/phocks/68781ef10580971aa4ab1f282be217f7


import React, { Component } from 'react';
import './App.css';
import AnimationCount from 'react-count-animation';



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
  //Milliseconds: 1 min -> 60,000
  //Milliseconds: 3 mins -> 180,000
  //Milliseconds: 5 mins -> 300,000
  duration: 180000,
  decimals: 2,
  useGroup: true,
  animation: 'up'
};
const settings8 = {
  start: randomNumber3,
  count: randomNumber4,
  //Milliseconds: 1 min -> 60,000
  //Milliseconds: 3 mins -> 180,000
  //Milliseconds: 5 mins -> 300,000
  duration: 180000,
  decimals: 2,
  useGroup: true,
  animation: 'up'
};




class App extends Component {
  render() {
    return (
      <div className="">

        <div className="cardContainer">
            <div className="card bg-white">
                <h1>KELP</h1>
                <p>Kelp is a free, customizable trading bot for the Stellar universal marketplace. The software is open-source and can trade any asset. </p>
                <p>Use it to:</p>
                <ul>
                    <li>Create liquidity</li>
                    <li>Set a spot price</li>
                    <li>Make spreads and make markets</li>
                    <li>Price and trade your own stable coins</li>
                    <li>Mimic orders from other exchanges</li>
                </ul>
                <p className='download'>Download</p>
                <p className='github'>GitHub README</p>
                <p className='getintouch'>Get in touch</p>
            </div>
        </div>

       <div className="creature first">
          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

        <div className="creature second">
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

        <div className="creature third">

          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>
          
          <div className="seg"><AnimationCount {...settings5}/></div>
        </div>

        <div className="creature fourth">
          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

        <div className="creature fifth">
          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

        <div className="creature sixth">
          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

        <div className="creature seventh">
          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

        <div className="creature eighth">
          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

      </div>
    );
  }
}

export default App;
