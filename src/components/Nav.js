import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../images/image6.jpg'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';



function Nav() {
    return (
        <NavStyle>
            <div className="logo">
                <img src={logo} alt="" />
            </div>


            <div className="icons">

                <a href ="https://github.com/JoeTiw" className="githubicon" >
                <GitHubIcon /> 
                </a>
                <a href ="https://www.instagram.com/joetiw/" className="instagramicon">
                <InstagramIcon /> 
                </a>
                <a href ="https://www.linkedin.com/in/bhupin-tiwari" className="linkedinicon">
                <LinkedInIcon />
                </a>
               

            </div>


            <ul className="navigation-item">

                <li className="navigation-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>

                <li className="navigation-item">
                    <NavLink to="/introduction" activeClassName="active-class" exact>Introduction</NavLink>
                </li>

                <li className="navigation-item">
                    <NavLink to="/projects" activeClassName="active-class" exact>Projects</NavLink>
                </li>

                <li className="navigation-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>

                <li className="navigation-item">
                    <NavLink to="/photography" activeClassName="active-class" exact>Photography</NavLink>
                </li>

                <li className="navigation-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact Me</NavLink>
                </li>
            </ul>

            <footer className="footer">

                <p>@copyrights Bhupin 2021</p>

            </footer>


        </NavStyle>
    )
}

const NavStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: white;   //this is the sidebar line...2px solid var( --black-color)

    
    .logo{
        width: 90%;
        border-bottom:1px solid var( --black-color);  //1px solid var( --white-color)
        text-align: center;
        padding: 2rem 0%;

        img{
            width: 75%;
            border-radius: 50%;
            border: 3px solid var(--black-color);
            

        }
    }

    .icons{
         display: flex;
         justify-content:center ;
         
    
            .githubicon{
           border: 1px solid var(--black-color);
           display: flex;
           border-radius: 50%;
           margin-right: 10px;
           &:hover{
                background-color: var(--purple-color);
                cursor: pointer;
                }
          
            }

            .instagramicon{
            border: 1px solid var(--black-color);
            display: flex;
            border-radius: 50%;
            margin-right: 10px;
            &:hover{
                background-color: var(--purple-color);
                cursor: pointer;
                }
           
            }

            .linkedinicon{
            border: 1px solid var(--black-color);
            display: flex;
            border-radius: 50%;
            &:hover{
                background-color: var(--purple-color);
                cursor: pointer;
                }
           
            }

            svg{
                margin: 0.8rem;
            }
    }

    .navigation-item{
        width: 100%;
        text-align: center;
        color: white;

            .active-class{
                background-color: var(--primary-color);
            }


        li{
            display: block;
           
            a{
                display: block;
                padding: .3rem 0;
                position: relative;
                font-weight: 500;
                letter-spacing: 1px;

                &:hover{
                        cursor: pointer;
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: rgba(51, 190, 255, 0.5);
                    transition: All 0.4s cubic-bezier(1,.05,.83,.67);
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }


    footer{
    border-top: 1px solid var( --black-color);
    width: 50%;
    p{
        padding: 1rem 0;
        font-size: 14px;
        text-align: center;
        color: black;
    }
}
    
`;
export default Nav
