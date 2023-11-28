import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HomeMain from './components/homeMain';
import Footer from './components/footer';
//  import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { Card } from '@nextui-org/react';
function App() {
  return (
    <NextUIProvider>
    <div className="body ">
      
      <header >
     <Navbar />
      </header>
      <main>
      <HomeMain />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    </NextUIProvider>
  );
}

export default App;
