import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    return (
        <div className="bg-success">
            <Banner></Banner>
            <div className="container">
                <div className="row">
                    {
                        teams.map(team => <Team team={team} key={team.idTeam}></Team>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Home;