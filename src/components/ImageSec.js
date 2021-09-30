import React from 'react'
import styled from 'styled-components'
import image5 from '../images/image5.jpg'

function ImageSec() {
    return (
        <ImageStyled>
            <div className="left-content">
                <img src={image5} alt="holi image" />

            </div>
            <div className="right-content">

                <h4>I am <span>Bhupin Tiwari</span></h4>

                <p className="paragraph">
                    Equipped with a strong foundation in software engineering and programming principles across multiple platforms.
                    Currently pursuing B.A. in Software Engineering with a 3.6 GPA from the University of Wisconsin Green-Bay and equipped
                    with a High School Diploma in Computer Science from Appleton East High School and Tesla Engineering Charter School.
                    Able to develop, test, and debug code while designing interfaces and administering systems. Proven success in quickly learning
                    and mastering new technologies.
                </p>

                <div className="intro-info">
                    <div className="information-title">

                        <p>Full Name:</p>
                        <p>Nationality:</p>
                        <p>Languages:</p>
                        <p>Location:</p>
                        <p>Hobbies:</p>

                    </div>

                    <div className="info">

                        <p> Bhupin Tiwari</p>
                        <p> Nepali</p>
                        <p> Nepali, English, Hindi</p>
                        <p> Appleton, Wisconsin</p>
                        <p> Coding, Video Games, Soccer</p>

                    </div>

                </div>

            </div>
        </ImageStyled>
    )
}



const ImageStyled = styled.div`
    margin-top: 3rem;

    display: flex;

    .left-content{
        width: 100%;
        
        img{
            width: 90%;
            height: 100%;
            object-fit:cover;
        }
    }

    .right-content{
        h4{
            font-size: 2rem;
            color: red;

            span{
                font-size: 2rem;
                color: purple;
                
            }
        }

        .paragraph{
            padding: 1rem 0;
        }

        .intro-info{
            display: flex;

            .information-title{
                padding-right:2rem;

                p{
                    font-weight: 500;
                }
            }

            .information-title, .info{

                p{
                    padding:.3rem 0;
                }

            }
        }

    }




`;

export default ImageSec
