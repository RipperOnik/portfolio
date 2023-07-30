import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList'
import { GitHub, WebAsset } from '@mui/icons-material'
import styled from 'styled-components'

export default function ProjectDisplay() {
    const { id } = useParams()
    const project = projectList[id]
    return (
        <Wrapper>
            <h1>{project.name}</h1>
            <h2>View deployed app <a href={project.appLink}>here</a></h2>
            <img src={project.image} alt={project.name} />
            <p>
                <strong>Skills</strong> {project.skills}
            </p>
            <section className='links'>
                <a href={project.githubLink}><GitHub /></a>
                <a href={project.appLink}><WebAsset /></a>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.article`

    width: 100%;
    display: flex;
    min-height: calc(100vh - 300px);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    h1 {
        margin-top: 50px;
        color: #3e497a;
        font-size: 2rem;
    }
    h2{
        color: #3e497a;
        font-size: 1rem;
    }
    img {
        width: calc(100% - 2rem);
        height: 600px;
        border-radius: 10px;
    }

    p {
        margin: 0 1rem;
        font-size: 2rem;
        color: #3e497a;
    }

    svg {
        font-size: 60px;
        color: #3e497a;
    }
    .links{
        display: flex;
    }
    @media only screen and (max-width: 600px) {
        img{
            height: 300px;
        }
    }
`
