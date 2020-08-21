import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import AuthOptions from '../auth/AuthOptions';

export default function Header() {
    // const { userData } = useContext(UserContext);

    return (
        <header id='header'>
            <Link to='/'>
                <h1 className='title'>Tara Martello</h1>
            </Link>

            {/* <AuthOptions /> */}

        </header>
    )
}
