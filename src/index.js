import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

return(
<div className='app'>
<Power />
<div className='controlNkeys'>
<Controls />
<Keys />
</div>
</div>
);


  }
};

const Power=()=>{
  return(
    <div className='power'>
    <h1>DrumerBoy</h1>
    <i className="fas fa-power-off"></i>
    </div>
  );
}

const Keys=()=>{
  return(
    <div className='keys'>
    <div>Q</div>
    <div>W</div>
    <div>E</div>
    <div>A</div>
    <div>S</div>
    <div>D</div>
    <div>Z</div>
    <div>X</div>
    <div>C</div>
    </div>
  );
}

const Controls=()=>{
  return(
    <div className='controls'>
    <div className='lcd'>
    <div className='volTextNmodelText'>
    <p className='volText'>Volume: 40%</p>
    <p className='modelText'>Mode: Drums</p>
    </div>
    <p className='sounndText'>CLAP</p>
    </div>
    <div className='volNmode'>
    <div className='vol'><i class="fas fa-volume-up"></i><input type="range" min="1" max="100" value="50" /></div>
    <div className='mode'>Mode</div>
    </div>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
