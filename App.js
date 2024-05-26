// import './App.css';
// // export default App;
// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// App.js

import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';

// Main App component
function App() {

  return ( <div className='navbar'>
    <Navbar />
  </div>);
}

export default App;
