import React from 'react'
import { InnerLayout } from '../styles/Layout';
import Title from './Title';
import styled from 'styled-components';
import SkillsCards from './SkillsCards';
import Design from '../images/weblogo.png';
import Software from '../images/coder.png';
import Photography from '../images/photo2.png';



function SkillsSection() {
    return (
        <InnerLayout>
            <SkillsSectionStyle>
                <Title title={'Skills'} />
                <div className="skills">
                    <SkillsCards
                        image={Design}
                        title={'Web Design'}
                        paragraph={'He took a sip of the drink. He was not sure whether he liked it or not, but at this moment it doesnt '}
                    />

                    <SkillsCards
                        image={Software}
                        title={'Software Development'}
                        paragraph={'He took a sip of the drink. He was not sure whether he liked it or not, but at this moment it doesnt '}
                    />

                    <SkillsCards
                        image={Photography}
                        title={'Photography'}
                        paragraph={'He took a sip of the drink. He was not sure whether he liked it or not, but at this moment it doesnt '}
                    />

                </div>

            </SkillsSectionStyle>

        </InnerLayout>
    )
}

const SkillsSectionStyle = styled.section`
        .skills{
            display: flex;
            justify-content: space-between;
            margin-top: 3rem;

            img{
                width: 160px;
                text-align: 10px;

                
            }
        }






`;

export default SkillsSection;
