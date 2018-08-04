import React, { Component } from 'react';
import './App.css';
import AnimationCount from 'react-count-animation';
import {settings, settings0, settings1, settings2, settings3, settings4, settings5, settings6, settings7, settings8} from './randomNum'
import styles from './styles';


class App extends Component {
  render() {
    return (
      <div style={styles} className="">

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
          <div className="anim1 seg"><AnimationCount {...settings1}/></div>
          <div className="      seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="      seg"><AnimationCount {...settings4}/></div>
          <div className="      seg"><AnimationCount {...settings8}/></div>

          <div className="      seg"><AnimationCount {...settings5}/></div>
          <div className="anim1 seg"><AnimationCount {...settings}/></div>
          <div className="anim2 seg"><AnimationCount {...settings7}/></div>
          <div className="      seg"><AnimationCount {...settings3}/></div>
          <div className="      seg"><AnimationCount {...settings6}/></div>

          <div className="      seg"><AnimationCount {...settings1}/></div>
          <div className="anim1 seg"><AnimationCount {...settings0}/></div>
          <div className="      seg"><AnimationCount {...settings2}/></div>
          <div className="      seg"><AnimationCount {...settings4}/></div>
          {/* <div className="anim2 seg"><AnimationCount {...settings8}/></div> */}

          <div className="      seg"><AnimationCount {...settings5}/></div>
          <div className="      seg"><AnimationCount {...settings}/></div>
          <div className="anim2 seg"><AnimationCount {...settings7}/></div>
          <div className="      seg"><AnimationCount {...settings3}/></div>
          <div className="      seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="anim1 seg"><AnimationCount {...settings8}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>

          <div className="      seg"><AnimationCount {...settings5}/></div>
          <div className="anim1 seg"><AnimationCount {...settings}/></div>
          <div className="anim2 seg"><AnimationCount {...settings7}/></div>
          <div className="      seg"><AnimationCount {...settings3}/></div>
          <div className="      seg"><AnimationCount {...settings6}/></div>

           <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="anim1 seg"><AnimationCount {...settings8}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>

          <div className="seg"><AnimationCount {...settings7}/></div>
        </div>

        <div className="creature second">
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="anim2 seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="anim2 seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="anim1 seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="anim2 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="anim2 seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="anim1 seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="anim2 seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="anim1 seg"><AnimationCount {...settings3}/></div>
          <div className="anim1 seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="anim1 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="anim2 seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

        <div className="creature third">

          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="anim2 seg"><AnimationCount {...settings8}/></div>

          <div className="anim1 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="anim2 seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="anim1 seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim2 seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="anim1 seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="anim1 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="anim2 seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="anim1 seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="anim2 seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="anim1 seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="anim2 seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="anim1 seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="anim1 seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>
          
          <div className="seg"><AnimationCount {...settings5}/></div>
        </div>

        <div className="creature fourth">
          <div className="anim1 seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim2 seg"><AnimationCount {...settings2}/></div>
          <div className="anim1 seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="anim2 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="anim2 seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="anim1 seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim2 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="anim2 seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="anim2 seg"><AnimationCount {...settings1}/></div>
          <div className="anim1 seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="anim1 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="anim2 seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="anim2 seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="anim1 seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

        <div className="creature fifth">
          <div className="anim1 seg"><AnimationCount {...settings1}/></div>
          <div className="anim2 seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="anim2 seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim2 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="anim1 seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="anim2 seg"><AnimationCount {...settings4}/></div>
          <div className="anim1 seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="anim1 seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
        </div>

        <div className="creature sixth">
          <div className="anim1 seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="anim1 seg"><AnimationCount {...settings0}/></div>
          <div className="anim2 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>

          <div className="anim1 seg"><AnimationCount {...settings8}/></div>
          <div className="anim2 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>

          <div className="seg"><AnimationCount {...settings6}/></div>
          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>

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

          <div className="anim2 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="anim1 seg"><AnimationCount {...settings3}/></div>
          <div className="anim2 seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="anim1 seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          {/* <div className="seg"><AnimationCount {...settings8}/></div> */}
        </div>

        <div className="creature seventh">
          <div className="anim1 seg"><AnimationCount {...settings5}/></div>
          <div className="anim1 seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="anim2 seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="anim1 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="anim2 seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>

           <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="anim2 seg"><AnimationCount {...settings3}/></div>
          <div className="anim1 seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="anim1 seg"><AnimationCount {...settings2}/></div>
          <div className="anim2 seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="anim1 seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="anim1 seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>

        <div className="creature eighth">
          <div className="anim1 seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>
          <div className="anim1 seg"><AnimationCount {...settings1}/></div>
          <div className="anim1 seg"><AnimationCount {...settings0}/></div>
          <div className="anim2 seg"><AnimationCount {...settings2}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="anim2 seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="anim1 seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="anim2 seg"><AnimationCount {...settings4}/></div>
          <div className="seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="anim1 seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="anim2 seg"><AnimationCount {...settings3}/></div>
          <div className="anim1 seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="seg"><AnimationCount {...settings4}/></div>
          <div className="anim1 seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="seg"><AnimationCount {...settings}/></div>
          <div className="seg"><AnimationCount {...settings7}/></div>
          <div className="seg"><AnimationCount {...settings3}/></div>
          <div className="seg"><AnimationCount {...settings6}/></div>

          <div className="seg"><AnimationCount {...settings1}/></div>
          <div className="seg"><AnimationCount {...settings0}/></div>
          <div className="seg"><AnimationCount {...settings2}/></div>
          <div className="anim1 seg"><AnimationCount {...settings4}/></div>
          <div className="anim2 seg"><AnimationCount {...settings8}/></div>

          <div className="seg"><AnimationCount {...settings5}/></div>
          <div className="anim1 seg"><AnimationCount {...settings}/></div>
          <div className="anim2 seg"><AnimationCount {...settings7}/></div>
          {/* <div className="seg"><AnimationCount {...settings3}/></div> */}
          {/* <div className="seg"><AnimationCount {...settings6}/></div> */}
        </div>



<div className="creature ninth">

  <div className="anim1 seg"><AnimationCount {...settings2}/></div>
  <div className="seg"><AnimationCount {...settings4}/></div>
  <div className="anim2 seg"><AnimationCount {...settings8}/></div>

  <div className="anim1 seg"><AnimationCount {...settings5}/></div>
  <div className="seg"><AnimationCount {...settings}/></div>
  <div className="seg"><AnimationCount {...settings7}/></div>
  <div className="anim2 seg"><AnimationCount {...settings3}/></div>
  <div className="seg"><AnimationCount {...settings6}/></div>

  <div className="anim1 seg"><AnimationCount {...settings1}/></div>
  <div className="seg"><AnimationCount {...settings0}/></div>
  <div className="anim2 seg"><AnimationCount {...settings1}/></div>
  <div className="seg"><AnimationCount {...settings0}/></div>
  <div className="seg"><AnimationCount {...settings2}/></div>
  <div className="anim1 seg"><AnimationCount {...settings4}/></div>
  <div className="seg"><AnimationCount {...settings8}/></div>

  <div className="anim1 seg"><AnimationCount {...settings5}/></div>
  <div className="seg"><AnimationCount {...settings}/></div>
  <div className="seg"><AnimationCount {...settings7}/></div>
  <div className="anim2 seg"><AnimationCount {...settings3}/></div>
  <div className="seg"><AnimationCount {...settings6}/></div>

  <div className="seg"><AnimationCount {...settings1}/></div>
  <div className="anim1 seg"><AnimationCount {...settings0}/></div>
  <div className="seg"><AnimationCount {...settings2}/></div>
  <div className="anim2 seg"><AnimationCount {...settings4}/></div>
  <div className="seg"><AnimationCount {...settings8}/></div>

  <div className="seg"><AnimationCount {...settings5}/></div>
  <div className="seg"><AnimationCount {...settings}/></div>
  <div className="anim1 seg"><AnimationCount {...settings7}/></div>
  <div className="seg"><AnimationCount {...settings3}/></div>
  <div className="seg"><AnimationCount {...settings6}/></div>

  <div className="seg"><AnimationCount {...settings1}/></div>
  <div className="anim2 seg"><AnimationCount {...settings0}/></div>
  <div className="seg"><AnimationCount {...settings2}/></div>
  <div className="seg"><AnimationCount {...settings4}/></div>
  <div className="anim1 seg"><AnimationCount {...settings8}/></div>

  <div className="seg"><AnimationCount {...settings5}/></div>
  <div className="seg"><AnimationCount {...settings}/></div>
  <div className="seg"><AnimationCount {...settings7}/></div>
  <div className="anim1 seg"><AnimationCount {...settings3}/></div>
  <div className="seg"><AnimationCount {...settings6}/></div>

  <div className="seg"><AnimationCount {...settings5}/></div>
</div>

<div className="creature tenth">
  <div className="anim1 seg"><AnimationCount {...settings1}/></div>
  <div className="seg"><AnimationCount {...settings0}/></div>
  <div className="anim2 seg"><AnimationCount {...settings2}/></div>
  <div className="anim1 seg"><AnimationCount {...settings4}/></div>
  <div className="seg"><AnimationCount {...settings8}/></div>

  <div className="anim2 seg"><AnimationCount {...settings5}/></div>
  <div className="seg"><AnimationCount {...settings}/></div>
  <div className="anim2 seg"><AnimationCount {...settings7}/></div>
  <div className="seg"><AnimationCount {...settings3}/></div>
  <div className="anim1 seg"><AnimationCount {...settings6}/></div>

  <div className="seg"><AnimationCount {...settings1}/></div>
  <div className="seg"><AnimationCount {...settings0}/></div>
  <div className="anim2 seg"><AnimationCount {...settings2}/></div>
  <div className="seg"><AnimationCount {...settings4}/></div>
  <div className="seg"><AnimationCount {...settings8}/></div>

  <div className="seg"><AnimationCount {...settings5}/></div>
  <div className="seg"><AnimationCount {...settings}/></div>
  <div className="seg"><AnimationCount {...settings7}/></div>
  <div className="anim2 seg"><AnimationCount {...settings3}/></div>
  <div className="seg"><AnimationCount {...settings6}/></div>

  <div className="anim2 seg"><AnimationCount {...settings1}/></div>
  <div className="anim1 seg"><AnimationCount {...settings0}/></div>
  <div className="seg"><AnimationCount {...settings2}/></div>
  <div className="seg"><AnimationCount {...settings4}/></div>
  <div className="seg"><AnimationCount {...settings8}/></div>

  <div className="anim1 seg"><AnimationCount {...settings5}/></div>
  <div className="seg"><AnimationCount {...settings}/></div>
  <div className="seg"><AnimationCount {...settings7}/></div>
  <div className="anim2 seg"><AnimationCount {...settings3}/></div>
  <div className="seg"><AnimationCount {...settings6}/></div>

  <div className="seg"><AnimationCount {...settings1}/></div>
  <div className="seg"><AnimationCount {...settings0}/></div>
  <div className="anim1 seg"><AnimationCount {...settings2}/></div>
  <div className="seg"><AnimationCount {...settings4}/></div>
  <div className="anim2 seg"><AnimationCount {...settings8}/></div>

  <div className="seg"><AnimationCount {...settings5}/></div>
  <div className="anim1 seg"><AnimationCount {...settings}/></div>
  <div className="seg"><AnimationCount {...settings7}/></div>
</div>

      </div>
    );
  }
}

export default App;
