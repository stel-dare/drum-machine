import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import crash from './drumSounds/crash.wav';
import flam from './drumSounds/flam.wav';
import hat from './drumSounds/hat.wav';
import kick from './drumSounds/kick.wav';
import multicrash from './drumSounds/multicrash.wav';
import ophat from './drumSounds/ophat.wav';
import pdhat from './drumSounds/pdhat.wav';
import rim from './drumSounds/rim.wav';
import snare from './drumSounds/snare.wav';
import a3 from './guitarSounds/A3.wav';
import b3 from './guitarSounds/B3.wav';
import c3 from './guitarSounds/Csharp3.wav';
import c4 from './guitarSounds/Csharp3Csharp4.wav';
import d3 from './guitarSounds/D3.wav';
import d5 from './guitarSounds/D5.wav';
import e2 from './guitarSounds/E2.wav';
import e4 from './guitarSounds/E4.wav';
import f3 from './guitarSounds/F2F3.wav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    drums:true,
    volume:50,
    power:true,
    instrumentKey:'clap'

};
this.playAudio=this.playAudio.bind(this);
this.setMode=this.setMode.bind(this);
this.volumeUp=this.volumeUp.bind(this);
this.turnOff=this.turnOff.bind(this);
  }

  componentDidMount(){
  document.getElementsByClassName('keys')[0].addEventListener('click',this.playAudio);
  document.addEventListener('keydown',this.playAudio);

  }

  componentWillUnmount(){
  document.getElementsByClassName('keys')[0].removeEventListener('click',this.playAudio);
  document.removeEventListener('keydown',this.playAudio);
  }

  playAudio(event){
    //console.log(event.key);
if(event.target.firstElementChild.nodeName==='AUDIO' && this.state.power){
this.soundRef.src=  event.target.firstElementChild.src;
this.soundRef.load();
this.soundRef.play();
console.dir(event.target.firstElementChild.title);
this.setState({
  instrumentKey:event.target.firstElementChild.title
});
}

else if (event.type==='keydown' && this.state.power && /q|w|e|a|s|d|z|x|c/.test(event.key)) {
this.soundRef.src=document.getElementById(event.key).src;
this.soundRef.load();
this.soundRef.play();
this.setState({
  instrumentKey:document.getElementById(event.key).title
});
//console.log(document.getElementById(event.key).src);
}
  }

  setMode(){
    this.setState({
      drums:!this.state.drums
    });
  }

  volumeUp(){
//console.log(document.getElementById('volumeUp').value);
console.log(this.soundRef.volume);
this.setState({
  volume:document.getElementById('volumeUp').value
});
this.soundRef.volume=document.getElementById('volumeUp').value/100;
console.log(this.soundRef.volume);
  }

turnOff(){
  this.setState({
    power:!this.state.power
  });
  document.getElementsByClassName('power')[0].classList.toggle('powerOff');
  document.getElementsByClassName('fa-volume-up')[0].classList.toggle('powerOff');
  document.getElementById('volumeUp').classList.toggle('powerOff');
  document.getElementsByClassName('mode')[0].classList.toggle('powerOff');
  document.getElementsByClassName('lcd')[0].classList.toggle('powerOff');
  document.getElementsByClassName('app')[0].classList.toggle('powerOff');
  document.getElementsByTagName('body')[0].classList.toggle('powerOff');
  for(let i= 0; i<9 ;i++){
  document.getElementsByClassName('keys')[0].childNodes[i].classList.toggle('powerOff');
}
}

  render() {
return(
<div className='app'>
<Power turnOff={this.turnOff}/>
<div className='controlNkeys'>
<Controls drums={this.state.drums} setMode={this.setMode} volume={this.state.volume} volumeUp={this.volumeUp}  instrumentKey={this.state.instrumentKey}/>
<Keys drums={this.state.drums}/>
<audio src={null} ref ={ref => {this.soundRef=ref;}} />
</div>
</div>
);

  }
};

const Power=({turnOff})=>{
  return(
    <div className='power '>
    <h1>DrumerBoy</h1>
    <i className="fas fa-power-off" onClick={turnOff}></i>
    </div>
  );
}

const Keys= ({drums})=>{

  return(
    <div className='keys' >
    <div>Q<audio id='q' src={drums? crash : a3} title={drums? 'crash' : 'a3'}></audio></div>
    <div>W<audio id='w' src={drums? flam : b3} title={drums? 'flam' : 'b3'}></audio></div>
    <div>E<audio id='e'  src={drums? hat : c3} title={drums? 'hat' : 'c3'}></audio></div>
    <div>A<audio id='a' src={drums? kick : c4} title={drums? 'kick' : 'c4'}></audio></div>
    <div>S<audio id='s' src={drums? ophat : d3} title={drums? 'ophat' : 'd3'}></audio></div>
    <div>D<audio id='d' src={drums? multicrash : d5} title={drums? 'multicrash' : 'd5'}></audio></div>
    <div>Z<audio id='z' src={drums? pdhat : e2} title={drums? 'pdhat' : 'e2'}></audio></div>
    <div>X<audio id='x' src={drums? rim : e4} title={drums? 'rim' : 'e4'}></audio></div>
    <div>C<audio id='c' src={drums? snare : f3} title={drums? 'snare' : 'f3'}></audio></div>
    </div>
  );
}

const Controls=({drums,setMode,volume,volumeUp,instrumentKey})=>{
  return(
    <div className='controls'>
    <div className='lcd'>
    <div className='volTextNmodelText'>
    <p className='volText'>Volume: {volume}%</p>
    <p className='modelText'>Mode: {drums? 'Drums' : 'Guitar'}</p>
    </div>
    <p className='sounndText'>{instrumentKey.toUpperCase()}</p>
    </div>
    <div className='volNmode'>
    <div className='vol'><i className="fas fa-volume-up "></i><input type="range" min="1" max="100"   id='volumeUp' onChange={volumeUp} onInput={volumeUp} /></div>
    <div className='mode' onClick={setMode}>Mode</div>
    </div>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
