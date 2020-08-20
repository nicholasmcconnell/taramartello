import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import TodoOptions from '../todo/TodoOptions';
import TaraName from '../../assets/images/TaraName.png';


function Home() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
     
        localStorage.setItem('lastVisited', '');

        if (!userData.user) {
            history.push('/login')
        }

    });
    return (
        <>
           {/* <TodoOptions /> */}

           <div className="container">
             <img className="taraImage" src={TaraName} />;
           </div>
        </>
    )
}

export default Home

