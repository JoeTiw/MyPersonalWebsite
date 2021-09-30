import React from 'react'
import styled from 'styled-components'

function Title({ title, span }) {
    return (
        <TitleStyle>
            <h2>{title}</h2>

        </TitleStyle>
    )
}

const TitleStyle = styled.div`

position: relative;
h2{
    color: black;
    font-size: 2.8rem;
    padding-bottom: .7rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;

    &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 19.5rem;
            height: .33rem;
            background-color: purple ; 
            left: 0;
    }

    &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 10rem;
            height: .33rem;
            background-color: red ; 
            left: 0;
    }
    
}




`




export default Title
