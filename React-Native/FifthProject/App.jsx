
// import React from 'react';
// // import { Node } from 'react';
// import {
//   Text,
//   View,
// } from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <Text>Hello React Native</Text>
//     </View>
//   );
// }

// export default App;


// .watchmanconfig --> Detect our changes
// metro.config.js --> Update the changes

// ------------------------------------------------------

// import React from 'react';
// // import { Node } from 'react';
// import {
//   Text,
//   View,
// } from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <Text style={{fontSize : 20}}>Hello React Native</Text>
//     </View>
//   );
// }

// export default App;

// -----------------------------------------------------------

// import React from 'react';
// // import { Node } from 'react';
// import {
//   Text,
// } from 'react-native';

// const App = () => {
//   return (
//     // For showing normal text, then will use <Text></Text> component.

//       <Text style={{fontSize : 20}}>Hello Text Component</Text>
//   );
// }

// export default App;

// ------------------------------------------------------

// import React from 'react';
// // import { Node } from 'react';
// import {
//   Text,
// } from 'react-native';

// const App = () => {
//   return (
//     // We can't use more then one component without using any raper component.
//     <Text style={{fontSize : 20}}>Hello Text Component</Text>
//     <Text style={{fontSize : 20}}>Hello Text Component</Text>
//   );
// }

// export default App;

// -------------------------------------------------------

// import React from 'react';
// // In React-Native we <View></View> component as rapper
// import {
//   Text,
//   View
// } from 'react-native';

// const App = () => {
//   return (
//     <View>
//       <Text style={{fontSize : 20}}>Hello First Text Component</Text>
//       <Text style={{fontSize : 10}}>Hello Second Text Component</Text>
//     </View>
//   );
// }


// export default App;

// ---------------------------------------------------------

// import React from 'react';
// import {
//   Text,
//   View
// } from 'react-native';

// const App = () => {
//   return (
//     // We can't write text inside only <View></View> component because
//     // <View></View> component work as raper component not like <Text></Text> Component
//     <View>
//       Hello
//     </View>
//   );
// }

// export default App;

// ----------------------------------------------------------

// import React from 'react';


// import {
//   Text,
//   View,
//   Button
// } from 'react-native';

// const App = () => {

//   return (
//     <View>
//       {/* We Can't write text between component like Normal HTML Element */}
//       {/* We can write text in title prop of <Button></Button> component */}
//       <Text>Hello First React Native Component</Text>
//       <Button title="Press Here"></Button>

//       <Text>Hello Second React Native Component</Text>
//       <Button title="Press Me To"></Button>
//     </View>
//   );

// }

// export default App;

// --------------------------------------------------------

import React from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';

const App = () => {
  return (
    <View>
      {/* We Can't write text between component like Normal HTML Element */}
      {/* We can write text in title prop of <Button></Button> component */}
      <Text>Hello First React Native Component</Text>
      <Button title="Press Here"></Button>
      <Text>Hello Second React Native Component</Text>
      <Button title="Press Me To"></Button>
    </View>
  );
}

export default App;