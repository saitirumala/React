import React,{Component} from 'react';
import click1 from './click1.wav';
import click2 from './click2.wav';
class Excel extends Component {
    constructor(props){
        super(props);
        this.state={
            playing :false,
            bpm:100,
            count:0,
            beatsPerMeasure: 4
        }
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
    }
    handleBpmChange =(event)=>{
        const bpm = event.target.value;
        this.setState({
            bpm    
        })
    }
    startStop = () => {
        if (this.state.playing) {
            
            clearInterval(this.timer);
            this.setState({
              playing: false
            });
          } else {
            
            this.timer = setInterval(
              this.playClick,
              (60 / this.state.bpm) * 1000
            );
            this.setState(
              {
                count: 0,
                playing: true
            
              },
              this.playClick
            );
          }
       }
    render(){
        const {bpm,playing} = this.state;
        console.log('bpm',this.state)
        return(
            <div>
              <div style={{textAlign: 'center',maxWidth: '375px',margin: '0 auto',padding: '30px'}}>
        <div style={{  width:' 100%',margin: '10px'}}>
          <div>{bpm} BPM</div>
          <input style={{width:'300px'}} type="range" min="60" max="240" value={bpm} onChange={this.handleBpmChange}   />
        </div>
        <button onClick={this.startStop}startStop style={{background: '#c94d46',
  padding: '10px',border: '1px solid #832420',borderRadius: '2px',width: '100px',color:' #fff',fontSize: '18px'}}>{playing ? 'Stop' : 'Start'}</button>
      </div>                                      
            </div>
        )
    }
}
export default Excel;
