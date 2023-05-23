import React from 'react'
import ProjectItem from '../components/ProjectItem'
import styled from 'styled-components'
import { projectList } from '../helpers/ProjectList'

export default function Projects() {
    return (
        <Wrapper>
            <h1>My Personal Projects</h1>
            <div className='project-list'>
                {projectList.map((project, index) => {
                    return <ProjectItem name={project.name} image={project.image} id={index} />
                })}

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.main`

    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .project-title {
    text-align: center;
    color: #3e497a;
    font-size: 60px;
    font-weight: bolder;
    }

    .project-list {
    width: 70vw;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    }


    @media only screen and (max-width: 1300px) {
    .project-list {
        grid-template-columns: 1fr 1fr;
    }
    }

    @media only screen and (max-width: 800px) {
    .project-list {
        grid-template-columns: 1fr;
    }
    }

    @media only screen and (max-width: 800px) {
    .project-list {
        width: 100%;
    }
    }
`
