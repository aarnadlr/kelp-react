import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
font-size: 12pt;
  /* width: 50px; */
  height: 27px;
  overflow: hidden;
  ul {
      /* width: 80px; */
      padding-left: 0px;
      animation: ticker 60s linear infinite;
      /* -webkit-user-select: none; */
  }
  ul li {
      /* line-height: 29px; */
      list-style: none;
      /* font-size: 16pt; */
  }
  @keyframes ticker {
    0% {
        margin-top: 0}
    /* 25% {
        margin-top: -30px}
    50% {
        margin-top: -60px}
    75% {
        margin-top: -90px} */
    100% {
        margin-top: -500px}
  }
`

class TickerEl1 extends Component {
  render() {
    return (
      <Div>
        <ul>
          <li>0000</li>
          <li>1111</li>
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>

          <li>0000</li>
          <li>1111</li>
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>
        </ul>
      </Div>
    )
  }
}


class TickerEl2 extends Component {
  render() {
    return (
      <Div>
        <ul>
          {/* <li>0000</li> */}
          <li>1111</li>
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>

          <li>0000</li>
          <li>1111</li>
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>
        </ul>
      </Div>
    )
  }
};

class TickerEl3 extends Component {
  render() {
    return (
      <Div>
        <ul>
          {/* <li>0000</li> */}
          {/* <li>1111</li> */}
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>

          <li>0000</li>
          <li>1111</li>
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>
        </ul>
      </Div>
    )
  }
};





class TickerEl4 extends Component {
  render() {
    return (
      <Div>
        <ul>
          {/* <li>0000</li>
          <li>1111</li>
          <li>2222</li> */}
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>

          <li>0000</li>
          <li>1111</li>
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>
        </ul>
      </Div>
    )
  }
}


class TickerEl5 extends Component {
  render() {
    return (
      <Div>
        <ul>
          {/* <li>0000</li> */}
          {/* <li>1111</li>
          <li>2222</li>
          <li>3333</li> */}
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>

          <li>0000</li>
          <li>1111</li>
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>
        </ul>
      </Div>
    )
  }
};

class TickerEl6 extends Component {
  render() {
    return (
      <Div>
        <ul>
          {/* <li>0000</li> */}
          {/* <li>1111</li> */}
          {/* <li>2222</li>
          <li>3333</li>
          <li>4444</li> */}
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>

          <li>0000</li>
          <li>1111</li>
          <li>2222</li>
          <li>3333</li>
          <li>4444</li>
          <li>5555</li>
          <li>6666</li>
          <li>7777</li>
          <li>8888</li>
          <li>9999</li>
        </ul>
      </Div>
    )
  }
};

export {TickerEl1 as TickerEl1}
export {TickerEl2 as TickerEl2}
export {TickerEl3 as TickerEl3}
export {TickerEl4 as TickerEl4}
export {TickerEl5 as TickerEl5}
export {TickerEl6 as TickerEl6}
// export TickerEl1;
// export TickerEl2;