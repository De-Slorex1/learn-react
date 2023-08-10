import './App.css';
import React from 'react';
import Counter from './component/counter.component';
import ObjectHooks from './component/object.component';
import ArrayHooks from './component/array.component';
import HooksComp from './component/hooksComp';
import MouseOver from './component/mouseOver.component';
import Timer from './component/tickTimer.component';
import DataFetch from './component/dataFetching.component';
import UserA from './UserContext/userA.component';
import UserReducer from './UseRedeucer/useReducer.component';
import UseReduc from './UseRedeucer/UseReduc.component';


function App() {
 return ( 
    <div>
      <center>
        <h2>Start Coding Today</h2>
        <Counter /><br />
        <ObjectHooks /><br />
        <UseReduc /><br />
      </center>
    </div>
 );
}

export default App;
