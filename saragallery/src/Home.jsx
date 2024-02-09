import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import image3 from './Assets/imag2.png';
import Navbar from './Navbar';
class LandingPage extends React.Component {
  render() {

    
    return (
      <>    
      
        <link href="https://www.behance.net/gallery/122411115/HARMONY-Typeface/modules/696071009" rel="stylesheet" /><link href="https://fonts.google.com/specimen/GFS+Didot" rel="stylesheet" /><link href="./css/Home.css" rel="stylesheet" />
       <link href="https://en.bestfonts.pro/font/mackay#google_vignette:~:text=WEB-,SARA%20Gallery,-Mackay%20Italic" rel="stylesheet" /><link href="https://fonts.google.com/specimen/GFS+Didot" rel="stylesheet" /><link href="./css/Home.css" rel="stylesheet" />
    
      <div className="landing-page">
        <Navbar/>
        <section id="gallery" className="section gallery-section">
          <div className="gallery-content">
            <h1 className='sara'>SARA GALLERY</h1>
            <p>
              "To Live a creative life,we must lose our fear of being wrong"
            </p>
          </div>
        </section>
           <section id="paintings" className="section paintings-section">
          <div className="paintings-content">
            <h2>ART WORKS</h2>
            <p>
              "The world is the most inspiring art ever "
            </p>
            <div className="paintings-grid">
                  <div className="card-container">
                  <div className="card2">
                    <div className="front">
                   
                    </div>
                    <div className="back2">
                      <h3>Monet</h3>
                      <p>Type: Acrylic on canvas</p>
                      <p>Dimension: 30x30 inches</p>
                      <p>Price: $3000</p>
                    </div>
                  </div>
                    
                  {/*flipping Card 2*/}
                  <div className="card2">
                    <div className="front2">
                   
                    </div>
                    <div className="back2">
                      <h3>The Young Lady</h3>
                      <p>Type: oil on panel</p>
                      <p>Dimension: 24x36 inches</p>
                      <p>Price: $800</p>
                    </div>
                  </div>
                  {/*flipping Card 4*/}
                  <div className="card4">
                    <div className="front4">
                     
                    </div>
                    <div className="back4">
                      <h3>The Lilies</h3>
                      <p>Type: Acrylic on canvas</p>
                      <p>Dimension: 21x36 inches</p>
                      <p>Price: $1200</p>
                    </div>
                  </div>
                  {/*flipping Card 5*/}
                  <div className="card5">
                    <div className="front5">
                     
                    </div>
                    <div className="back5">
                      <h3>Dock At Low Tide</h3>
                      <p>Type: Acrylic on canvas</p>
                      <p>Dimension: 16x24 inches</p>
                      <p>Price: $25000</p>
                    </div>
                  </div>

                  {/*flipping Card 6*/}
                  <div className="card6">
                    <div className="front6">
                    </div>
                    <div className="back6">
                      <h3>Mosaic</h3>
                      <p>Type: oil on panel</p>
                      <p>Dimension: 18x24 inches</p>
                      <p>Price: $4500</p>
                    </div>
                  </div>
                  
                </div>
            </div>
          </div>
        </section>
        <section id="artists" className="section artists-section">
          <div className="artists-content">
            <h1>Latest Blog</h1>
            <div className="artists-grid">
              


            <div className="art-blog">
      <div className="blog-content">
        <h1 className="blog-title">In Talks with Rose Easton</h1>
        <p>
          A year from thee Young and Emerging Gallery Initiative,
          we catch up with Rose Easton,talking all things London
          Gallery Weekend and more
        </p>
        <a href="/blog" className="read-more-link" >
          Read More
        </a>
      </div>
      <div className="blog-image"><img src={image3} className='blogimage'></img></div>
    </div>

            </div>
          </div>
        </section>
        
      </div>
      </>

    );
  }
}


export default LandingPage;
