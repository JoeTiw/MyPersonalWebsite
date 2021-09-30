import React from 'react'
import styled from 'styled-components';
import photography from '../data/photography';
import Title from '../components/Title';
import { MainLayout, InnerLayout } from '../styles/Layout';





function PhotographyPage() {
    return (

        <MainLayout>
            <PhotographypageStyle>
                <Title title={'Photography'} />
                <InnerLayout className={'photos'}>
                    {

                        photography.map((photography) => {
                            return <div key={photography.id} className={'photo-items'}  >
                                <div className="image">
                                    <img src={photography.image} alt="" />
                                </div>
                                <div className="title">
                                    <a>
                                        {photography.title}
                                    </a>
                                </div>
                            </div>
                        })

                    }


                </InnerLayout>


            </PhotographypageStyle>
        </MainLayout>
    )
}

const PhotographypageStyle = styled.div`

    .photos{
        display:grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 20px;
       
    
.photo-items{
    background-color: var(--coral-color);
    background-size:cover;
    padding: 2rem 5rem;
    min-height: 120px;
    max-height: auto;
   
  
}
        .image{
            
            overflow: hidden;
            padding-bottom: .5rem;
            max-width: 100%;
            max-height: auto;
           
             
          
            img{
                max-width: 100%;
                max-height: auto;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(5deg) scale(1.1);
                
                
            }
        }
    }




`;

export default PhotographyPage
