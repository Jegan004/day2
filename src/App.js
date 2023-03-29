import './App.css';
import pic from "../src/Images/Titan.png";

import Armors from './pages/Watch';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <section id="header">
    <nav>
        <a href=""><img src={pic}/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" ><b>Home</b></a></li>
                    <li><a href="#header1"><b>About</b></a></li>
                    <li><a href="#header3"><b>Purchase</b></a></li>
                    <li><a href="#header4"><b>Contact</b></a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1>TITAN</h1><br/>
    <p>
        <b>Premium Watches for the Premium Looks</b>
    </p><br/><br/><br/><br/>
    <a href="https:/www.google.com" target="_blank" >VISIT US TO KNOW MORE</a>
</div>
    
</section>
{/* About Section */}
<section id="header1">
    <nav>
        <div class="headertext">
               <h2>
                
                </h2><br/>
                <div class="img2">
                    
                </div>
                
          
            <div>
                
            </div> 
        </div>
    </nav>
</section>
    <Armors/>    
    <Contact/>
    </div>
  );
}

export default App;
