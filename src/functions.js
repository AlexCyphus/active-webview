import axios from 'axios'

export const tp = (name) => {
  // set up passed down tp functions
  var NativeApp;

  // if on Android
  if (window.NativeApp){NativeApp = window.NativeApp}
  
  // if on iOS
  else if (window.webkit){
    NativeApp = {
      sendTrackingPoint: (name, val=true) => window.webkit.messageHandlers.sendTrackingPoint.postMessage({name: name, value: val})
    }
  }
  
  // if on web mock version
  else {
    NativeApp = {
      sendTrackingPoint: (name) => {console.log(name)}
    }
  }

  if (name == undefined){return null}
  const prefix = "Exp_Grp_"
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