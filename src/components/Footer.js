import React from 'react'
import { LinkedIn, GitHub, WhatsApp } from '@mui/icons-material'
import styled from 'styled-components'
import { socialMediaLinks } from '../helpers/Links'
export default function Footer() {
    return (
        <Wrapper>
            <div className='social-media'>
                <a href={socialMediaLinks.linkedIn}><LinkedIn /></a>
                <a href={socialMediaLinks.github}><GitHub /></a>
                <a href={socialMediaLinks.whatsapp}><WhatsApp /></a>
            </div>
            <p>&copy; 2023 Andrey Kan</p>

        </Wrapper>
    )
}

const Wrapper = styled.footer`

    width: 100%;
    height: 200px;
    background: #21325e;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    margin-top: 200px;
    

    .social-media svg {
    color: white;
    margin: 20px;
    font-size: 70px;
    cursor: pointer;
    }

    p {
    color: white;
    }

    @media only screen and (max-width: 600px) {
    svg {
    font-size: 50px;
    }
    }
`
