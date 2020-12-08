import React from 'react'
import './App.scss';
import ActionButton from './components/ActionButton.js';
import Row from './components/Row.js';
import Slider from './components/Slider.js';
import Popup from './components/Popup.js';
import InfoCard from './components/InfoCard.js';
import HeaderTitle from './components/HeaderTitle.js';
import FixedButton from './components/FixedButton.js';
import {tp, shuffleArray, postToSheets} from "./functions.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderScreen: 0,
      popup: false,
      infocard: false
    }
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  handleSliderChange(desiredSliderScreen){
    this.setState({sliderScreen: desiredSliderScreen})
  }

  render(){
    return (
      <div className="App">
        <button onClick={() => tp('testbtn1')}> testbtn1 </button>
        <button onClick={() => tp('testbtn2')}> testbtn2 </button>
        <HeaderTitle title={'I am category'}/>
        <Slider 
          title1={"Hello"}
          title2={"World"}
          sliderScreen={this.state.sliderScreen}
          handleSliderChange={this.handleSliderChange}
        />
        <Row title="Computer McComputerface" image="./test-image.jpeg" roundImage={true}>
          <p>Now I can put anything I want in here</p>
        </Row>
        <Row title="Computer McComputerface" image="./test-image.jpeg">
          <p>Now I can put anything I want in here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here</p>
        </Row>
        <ActionButton text={"hello world"} color={"blue"} close={true}/>
        {this.state.popup ? <Popup buttonText={"I am button"} text="i am description" placeholder="i am placeholder" title="poppy">
         <p>hello</p>
         <p>hello hello hello v hello vvhellohellohello hello hello hello hello hello hello hello hello v</p>
         <p>hello</p>
         <p>hello</p>
         <p>hello</p>
         
        </Popup> : null}
        {this.state.infocard ? 
        <InfoCard buttonText={"I am button"} title={"I am infocard"}>
          <p>HELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLD</p>
        </InfoCard>
        :
        null
        }
        <FixedButton image="/logo192.png"/>
      </div>
    );
  }
}

export default App;
