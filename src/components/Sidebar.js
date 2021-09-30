import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Particles from 'react-particles-js';
import ParticleConfig from '../components/particlesjs-config';



function Sidebar() {
    return (
        <SidebarStyle>
 
            <Nav />
            

            
        </SidebarStyle>
    )
}


const SidebarStyle = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color:lightcoral;          //this is for sidebar background


   

    `
export default Sidebar
