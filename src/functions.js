import axios from 'axios'

export function tp(name) {
  // set up passed down tp functions
  var NativeApp;

  // if on Android
  if (window.NativeApp){
    NativeApp = window.NativeApp;
    this.setState({device: 'Android'})
  }
  
  // if on iOS
  else if (window.webkit){
    NativeApp = {
      sendTrackingPoint: (tpname, val=true) => window.webkit.messageHandlers.sendTrackingPoint.postMessage({name: tpname, value: val})
    }
    this.setState({device: 'iOS'})
  }
  
  // if on web mock version
  else {
    NativeApp = {
      sendTrackingPoint: (name) => {console.log(name)}
    }
    this.setState({device: 'web'})
  }

  if (name == undefined){return null}
  const prefix = "_Grp_"
  name = prefix + name
  NativeApp.sendTrackingPoint(name)
}
  
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}
  
export const postToSheets = (baseUrl, firstEl, secondEl) => { 
  let url = baseUrl + "?groupName=" + firstEl + "&privacy=" + secondEl // for testing
  return axios.get(url)
}