import React from 'react'
import styled from 'styled-components';

function SkillsCards({image, title, paragraph}) {
    return (
        <SkillCardStyle>
             <div className="container">
            <img src ={image} alt=""/>
            <h4>{title}</h4>
            <p>{paragraph}</p>

             </div>
        </SkillCardStyle>
    )
}


const SkillCardStyle = styled.div`
    background-color: lightcyan;
    margin: 0 1.2rem;        //split sections
    border-left:1px solid var( --lightgray-color) ;    //use the --font-dark-color if i want
    border-right:1px solid var( --lightgray-color) ;
    border-bottom:1px solid var( --lightgray-color) ;
    border-top:8px solid var(--black-color) ;
    transition: all .3s ease-in-out;

    &:hover{
        border-top: 8px solid var(--coral-color) ;
        transform: translateY(3px);
    }
.container{
    padding: 1.2rem;

    h4{
        font-size: 1.6rem;
        color: coral;
        text-align: center;
    }
    img{
       margin-left: 100px;
    }

    p{
        color: black;
    }
}



`;
export default SkillsCards
