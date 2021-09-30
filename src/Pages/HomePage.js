import React from 'react'
import styled from 'styled-components';
import Particles from 'react-particles-js';
import ParticleConfig from '../components/particlesjs-config';




function HomePage() {
    return (
        <HomeContentStyle>
           
           
           <div className = "p-particlesjs-config">
               <Particles width='82.5vw' height ='100vh' params={ParticleConfig}  ></Particles>

                            </div>


           <div className = "description">
                <h1>Hello, This is <span>Bhupin Tiwari</span></h1>
                <p>
                Feel free to take a tour of my website and get to know me.
                </p>


            

           </div>
        </HomeContentStyle>
    )
}

const HomeContentStyle = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    img{
        width: 100%;
        height: 100vh;
        opacity: 0.8;
        
    }

    .p-particlesjs-config{
        position: relative;
        top: 0;
        left: 0;
    }
   .description{
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       text-align: center;
       width: 80%;

   }

`;

export default HomePage;
