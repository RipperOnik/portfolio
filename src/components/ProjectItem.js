import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function ProjectItem({ image, name, id }) {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <section className='project-item' onClick={() => navigate(`/project/${id}`)}>
                <div style={{ backgroundImage: `url(${image})` }} className='bg-image' />
                <h1>{name}</h1>
            </section>
        </Wrapper>

    )
}

const Wrapper = styled.article`
    .project-item {
    border-radius: 15px;
    width: 300px;
    height: 300px;
    margin: 40px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    }
    .project-item:hover {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in;
    cursor: pointer;
    }

    .project-item .bg-image {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }

    .project-item h1 {
    font-size: 25px;
    }

`