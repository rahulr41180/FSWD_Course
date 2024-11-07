
// import React, {Component} from 'react';

// import {
//   Text,
//   View,
// } from 'react-native';

// // Here we are inherit the App component with the help of class component
// class App extends Component {

// }

// export default App;

// --------------------------------------------------

// import React, {Component} from 'react';

// import {
//   Text,
//   View,
// } from 'react-native';

// class App extends Component {
//   // We can't return HTML directly from class component like function
//   // So for returning the HTML, We are using render() function.
//   render() {

//   }
  
// }

// export default App;

// -------------------------------------------------

import React, {Component} from 'react';

import {
  Text,
  View,
} from 'react-native';

class App extends Component {
  render() {
    return(
      <View>
        
        <Text>Hello</Text>
        <Text>Hello</Text>
        
      </View>
    )
  }
  
}

export default App;