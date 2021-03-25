import React from 'react'
import './App.scss';
import ActionButton from './components/ActionButton.js';
import Row from './components/Row.js';
import Slider from './components/Slider.js';
import Popup from './components/Popup.js';
import InfoCard from './components/InfoCard.js';
import HeaderTitle from './components/HeaderTitle.js';
import FixedButton from './components/FixedButton.js';
import DarkModeWrapper from './components/DarkModeWrapper.js'
import {buildTP, shuffleArray, postToSheets, getData} from "./functions.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderScreen: 0,
      popup: false,
      infocard: false,
      dark: false,
      currency: null,
      partners: undefined,
      profile: undefined
    }
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  handleSliderChange(desiredSliderScreen){
    this.setState({sliderScreen: desiredSliderScreen})
  }

  componentDidMount() {  
    const data = getData()

    this.setState({
      dark: data.isDarkModeEnabled,
      currency: data.myCurrency,
      partners: data.myPartners,
      profile: data.myProfile,
    }, console.log(this.state))
  }

  // to be updated with every experiment
  tp(action){
    return buildTP('testwebview')(action)
  }

  render(){

    const MainContent = () => {
      return (
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
      <button onClick={() => this.tp('testbtn1')}> testbtn1 </button>
      <button onClick={() => this.tp('testbtn2')}> testbtn2 </button>
      <div>
        <p className="header-title">currency:</p> <span><pre>{JSON.stringify(this.state.currency)}</pre></span>
        <p className="header-title">dark:</p> <span><pre>{JSON.stringify(this.state.dark)}</pre></span>
        <p className="header-title">partners:</p> <span><pre>{JSON.stringify(this.state.partners)}</pre></span>
        <p className="header-title">profile:</p> <span><pre>{JSON.stringify(this.state.profile)}</pre></span>
      </div>
      <HeaderTitle title={'I am category'}/>
      <Slider 
        title1={"Hello"}
        title2={"World"}
        sliderScreen={this.state.sliderScreen}
        handleSliderChange={this.handleSliderChange}
      />
      <Row title="Computer McComputerface" image={"/users/ranika.jpg"} roundImage={true}>
        <p>Now I can put anything I want in here</p>
        <pre>{JSON.stringify(this.state)}</pre>
      </Row>
      <Row title="Computer McComputerface" image={"/users/chelsea.jpg"}>
        <p>Now I can put anything I want in here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here here</p>
      </Row>
      <ActionButton text={"hello world"} color={"blue"} close={true} key={1}/>
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
      <FixedButton image="/flags/canada.png"/>
    </div>
      )
    }
    
    return this.state.dark 
      ? <DarkModeWrapper><MainContent/></DarkModeWrapper>
      : <MainContent/>
  }
}

export default App;
