import React from 'react'
import { LinkedIn, Email, GitHub, WhatsApp } from '@mui/icons-material'
import styled from 'styled-components'
import { socialMediaLinks } from '../helpers/Links'

export default function Home() {
    return (
        <Wrapper>
            <article className='about'>
                <h2>Hi, My name is Andrey</h2>
                <div className='prompt'>
                    <p>A software developer with a passion for learning and creating</p>
                    <a href={socialMediaLinks.linkedIn}><LinkedIn /></a>
                    <a href={socialMediaLinks.github}><GitHub /></a>
                    <a href={socialMediaLinks.whatsapp}><WhatsApp /></a>
                    {/* <a href={`mailto:${socialMediaLinks.email}`}><Email /></a> */}
                </div>
            </article>
            <article className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>ReactJS, Redux, HTML, CSS, Bootstrap, StyledComponents</span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span>NodeJS, Express, MongoDB, SQL</span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>JavaScript, TypeScript</span>
                    </li>
                </ol>
            </article>
        </Wrapper>
    )
}


const Wrapper = styled.main`
    
    width: 100%;
    align-items: center;
    font-family: "Arial", sans-serif;
    color: #3e497a;
    min-height: calc(100vh - 300px);
    
    .about {
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #21325e;
    color: #f0f0f0;
    }

    .about h2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 80px;
    color: #e9d35b;
    height: 50px;
    }

    .about .prompt {
    width: 40%;
    font-size: 30px;
    }
    .prompt svg {
    font-size: 60px;
    margin: 5px;
    color: white;
    }

    .skills {
    font-size: 35px;
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    }

    .skills h1 {
    color: #3e497a;
    }

    .skills .list {
    list-style: none;
    width: 60%;
    }

    .list span {
    font-size: 20px;
    }

    @media only screen and (max-width: 600px) {
    .about h2 {
    font-size: 40px;
    }

    .about .prompt {
    margin-top: 10px;
    font-size: 20px;
    width: 80%;
    }

    .skills {
    text-align: center;
    }
    .list {
    padding: 0;
    }

    .skills h2 {
    font-size: 30px;
    }
    }
`