import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from "@mui/icons-material/Reorder"
import styled from 'styled-components'

export default function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])
    return (
        <Wrapper>
            <article className='navbar' id={expandNavbar ? 'open' : 'close'}>
                <div className="toggle-button">
                    <button onClick={() => setExpandNavbar(prev => !prev)}><ReorderIcon /></button>
                </div>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/experience'>Experience</Link>
                </div>
            </article>
        </Wrapper>

    )
}

const Wrapper = styled.section`
    .navbar {
    width: 100%;
    height: 100px;
    background: #21325e;
    }

    .links {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    }

    .navbar a {
    color: white;
    text-decoration: none;
    margin: 20px;
    font-size: 25px;
    }

    .toggle-button {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    }

    .toggle-button svg {
    font-size: 50px;
    }
    .toggle-button button {
    margin-right: 20px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    }

    #open {
    height: 100vh;
    }

    #open .links {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 100px;
    }

    #open a {
    width: 100%;
    text-align: center;
    }

    @media only screen and (max-width: 900px) {
    .navbar a {
        width: 70px;
    }
    }

    @media only screen and (max-width: 600px) {
    .toggle-button {
        display: flex;
    }
    #close a {
        display: none;
    }
    }

    @media only screen and (min-width: 600px) {
    .toggle-button {
        display: none;
    }

    .hidden-links {
        display: none;
    }

    #open {
        height: 100px;
    }

    #open .links {
        flex-direction: row;
    }
    }

`