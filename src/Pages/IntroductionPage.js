import React from 'react'
import styled from 'styled-components';
import{MainLayout} from '../styles/Layout';
import Title from '../components/Title';
import ImageSec from '../components/ImageSec';
import SkillsSection from '../components/SkillsSection';

function IntroductionPage() {
    return (
        <MainLayout>
            <IntroductionStyle>
                <Title title={'Introduction'}  />
                <ImageSec/>
                <SkillsSection/>
            </IntroductionStyle>
            
        </MainLayout>
    )
}

const IntroductionStyle = styled.section`








`;

export default IntroductionPage
