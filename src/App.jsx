//TODO: Orginal Vite + React
// {
//   import { useState } from 'react';
//   import reactLogo from './assets/react.svg';
//   import './App.css';

//   function App() {
//     const [count, setCount] = useState(0);

//     return (
//       <div className="App">
//         <div>
//           <a href="https://vitejs.dev" target="_blank">
//             <img src="/vite.svg" className="logo" alt="Vite logo" />
//           </a>
//           <a href="https://reactjs.org" target="_blank">
//             <img src={reactLogo} className="logo react" alt="React logo" />
//           </a>
//         </div>
//         <h1>Vite + React</h1>
//         <div className="card">
//           <button onClick={() => setCount((count) => count + 10)}>
//             count is {count}
//           </button>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test HMR
//           </p>
//         </div>
//         <p className="read-the-docs">
//           Click on the Vite and React logos to learn more
//         </p>
//       </div>
//     );
//   }

//   export default App;
// }

//TODO: Here The Main Project :
import React from 'react';
import styles from './style';
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* //TODO: NAVBAR SECTION */}
    <div className={` ${styles.paddingX} ${styles.flexCenter}  `}>
      <div className={` ${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* //TODO: HERO == MAIN PART : */}
    <div className={` bg-primary ${styles.flexStart}  `}>
      <div className={`${styles.boxWidth} `}>
        <Hero />
      </div>
    </div>
    {/* //TODO: DIFFERENT components : Statistics : */}
    <div className={` bg-primary ${styles.flexStart}  ${styles.paddingX} `}>
      <div className={`${styles.boxWidth} `}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
