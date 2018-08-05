import React, { Component } from 'react';
import './App.css';
import AnimationCount from 'react-count-animation';
import {settings, settings0, settings1, settings2, settings3, settings4, settings5, settings6, settings7, settings8} from './randomNum'
import styles from './styles';
// import $ from 'jquery';
// import 'jquery-ui';
// import '../node_modules/jquery-ui/ui/effect'
import {TickerEl1, TickerEl2, TickerEl3, TickerEl4, TickerEl5, TickerEl6} from './Components/TickerEl'
// import TickerEl2 from './Components/TickerEl'
class App extends Component {

  // componentDidMount(){

  //   $( function() {
  //     // anim1 = BRIGHTER AND SLOWER
  //             // MORE OF THESE
  //     function animLoop1() {
  //       $( ".anim1" ).animate({
  //         // BRIGHTER COLOR:
  //         color: "#4cdbc1"
  //         // color: "#44af9c"
  //       }, 2500, 'linear', function(){
  //         animLoop1();
  //       });
  //       $( ".anim1" ).animate({
  //         color: "#0e2c2e"
  //       }, 2500 );
  //     }
  //     animLoop1();
  
  //     // anim2 = DIMMER AND FASTER
  //             // FEWER OF THESE
  //     function animLoop2() {
  //       $( ".anim2" ).animate({
  //         // color: "#4cdbc1"
  //         color: "#44af9c"
  //       }, 1500, 'linear', function(){
  //         animLoop2();
  //       });
  //       $( ".anim2" ).animate({
  //         color: "#0e2c2e"
  //       }, 1500 );
  //     }
  //     animLoop2();
  
  //   } );
  // }

  render() {
    return (
      <div style={styles} className="">

        <div className="cardContainer">
            {/* <div className="card bg-white">
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
            </div> */}
        </div>

       <div className="creature first">
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>

          <div className="      seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>

          <div className="      seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>
          {/* <div className="anim2 seg"><TickerEl /></div> */}

          <div className="      seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="      seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>
          <div className="      seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl2 /></div>
          <div className="anim1 seg"><TickerEl3 /></div>
           <div className="seg"><TickerEl4 /></div>
          <div className="anim1 seg"><TickerEl5 /></div>
          <div className="seg"><TickerEl6 /></div>
        </div>




        <div className="creature second">
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          {/* <div className="seg"><TickerEl1 /></div> */}
          {/* <div className="seg"><TickerEl1 /></div> */}
        </div>

        <div className="creature third">

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          
          <div className="seg"><TickerEl1 /></div>
        </div>

        <div className="creature fourth">
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          {/* <div className="seg"><TickerEl1 /></div> */}
          {/* <div className="seg"><TickerEl1 /></div> */}
        </div>

        <div className="creature fifth">
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
        </div>

        <div className="creature sixth">
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          {/* <div className="seg"><TickerEl1 /></div> */}
        </div>

        <div className="creature seventh">
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

           <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          {/* <div className="seg"><TickerEl1 /></div> */}
          {/* <div className="seg"><TickerEl1 /></div> */}
        </div>

        <div className="creature eighth">
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>

          <div className="seg"><TickerEl1 /></div>
          <div className="anim1 seg"><TickerEl1 /></div>
          <div className="anim2 seg"><TickerEl1 /></div>
          {/* <div className="seg"><TickerEl1 /></div> */}
          {/* <div className="seg"><TickerEl1 /></div> */}
        </div>



<div className="creature ninth">

  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>

  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>

  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="seg"><TickerEl1 /></div>
</div>

<div className="creature tenth">
  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>

  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>

  <div className="seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
  <div className="anim2 seg"><TickerEl1 /></div>

  <div className="seg"><TickerEl1 /></div>
  <div className="anim1 seg"><TickerEl1 /></div>
  <div className="seg"><TickerEl1 /></div>
</div>

      </div>
    );
  }
}

export default App;
