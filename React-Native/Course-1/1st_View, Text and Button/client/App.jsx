import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

/*
We are importing the component from react-native because it is present inside react-native package

But in case of HTML tags those are supported by browser that's by we are not importing the HTML tags.
*/

// -----------------------------------------------------------
// In the HTML, we are calling tags to div, p, h1, input and each tags have first latter small
// But In the React-Native we calling component to Text, View and so on. And each component have first latter capital

// View : It is like a body tag or div tags
// Text : It is like a lable or p tags

// export default function App() {
//   return (
//     <View>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>Hello World</Text>
//       <StatusBar style="auto" />

//     </View>
//   );
// }

// ----------------------------------------------------------------

// export default function App() {
//   return (
//     <Text style={{ fontSize : 30}}>Open up App.js to start working on your app!</Text>

//   );
// }

// -----------------------------------------------------------------

// export default function App() {
//   return (
//     <Text style={{ fontSize : 30}}>Open up App.js to start working on your app!</Text>
//     <Text style={{ fontSize : 30}}>Open up App.js to start working on your app!</Text>
//   );
// }

/*
We cann't write it like this.
*/

// -----------------------------------------------------------------------------

/*

To overcome above problem we can use View component.
View component is like a rapper.
*/

// export default function App() {
//   return (
//     <View>
//       <Text style={{ fontSize : 18}}>Open up App.js to start working on your app!</Text>
//       <Text style={{ fontSize : 15}}>Open up App.js to start working on your app!</Text>

//       <Text style={{ fontSize : 10}}>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// -----------------------------------------------------------------

// We cann't write directly content inside View component


// export default function App() {
//   return (

//     <View>
//       Hello World
//     </View>
//   );
// }


// ------------------------------------------------------------

// We cann't write text inside the Button Component like :

// export default function App() {
//   return (
//     <View>
//       <Text style={{ fontSize: 18 }}>Open up App.js to start working on your app!</Text>
//       <Text style={{ fontSize: 15 }}>Open up App.js to start working on your app!</Text>

//       <Text style={{ fontSize: 10 }}>Open up App.js to start working on your app!</Text>

//       <Button>Submit</Button>
//     </View>
//   );
// }

// ---------------------------------------------------------------


/* 
For writing something in Button, for that we are using title attribute.

We are writing for like Press Here not click here because for mobile we are doing touching not click by mouse.
*/
// export default function App() {
//   return (
//     <View>
//       <Text style={{ fontSize: 18 }}>Open up App.js to start working on your app!</Text>

//       <Text style={{ fontSize: 15 }}>Open up App.js to start working on your app!</Text>
//       <Text style={{ fontSize: 10 }}>Open up App.js to start working on your app!</Text>
//       <Button title="Press Here"></Button>
//     </View>
//   );
// }

// ---------------------------------------------------------------------


export default function App() {
  return (
    <View>
      <Text style={{ fontSize: 18 }}>Open up App.js to start working on your app!</Text>
      <Text style={{ fontSize: 15 }}>Open up App.js to start working on your app!</Text>
      <Button title="Press Here"></Button>
      <Text style={{ fontSize: 10 }}>Open up App.js to start working on your app!</Text>
      <Button title="Submit Form"></Button>
    </View>

  );
}