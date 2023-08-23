
// Note :

// -------------------------------------------------
/*
React.JS :
React is a JavaScript library for rendering user interfaces (UI).

React applications are built from isolated pieces of UI called components.
*/
// --------------------------------------------------


// --------------------------------------------------
/* 
React Component :
A React component is a JavaScript function that you can sprinkle with markup. 
Here’s what that looks like :

export default function Profile() {
  return (
    <img

      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}

React components are regular JavaScript functions, 
but their names must start with a capital letter or they won’t work!
*/
// ------------------------------------------------------

// ------------------------------------------------------
/*
JSX :
The component returns an <img /> tag with src and alt attributes. 
<img /> is written like HTML, but it is actually JavaScript under the hood! 
This syntax is called JSX, and it lets you embed markup inside JavaScript.
*/
// -----------------------------------------------------

// ------------------------------------------------------
/*
Nesting and organizing components : 
Components can render other components, but you must never nest their definitions:
export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}

The snippet above is very slow and causes bugs. Instead, define every component at the top level:
export default function Gallery() {
  // ...
}
// ✅ Declare components at the top level
function Profile() {
  // ...

}
*/
// ------------------------------------------------------