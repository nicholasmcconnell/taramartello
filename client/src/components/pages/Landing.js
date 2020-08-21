import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import TodoOptions from '../todo/TodoOptions';
import LandingImage from '../layout/LandingImage'
import TaraName from '../../assets/images/TaraName.png';
import TaraOffer from '../../assets/images/whatIOffer.png';



function Home() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {

        localStorage.setItem('lastVisited', '');

        // if (!userData.user) {
        //     history.push('/login')
        // }

    });
    return (
        <>
            {/* <TodoOptions /> */}
            <LandingImage
                image={TaraName}
            />
             <LandingImage
                image={TaraOffer}
            />


        </>
    )
}

export default Home

