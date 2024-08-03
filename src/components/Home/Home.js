import Team from "../Team/Team";
import Banner from "../Banner/Banner";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League"
    )
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-success">
      <Banner />

      <div className="container py-5">
        {loading && <h1>Loading...</h1>}
        <div className="row g-2">
          {teams.map((team) => (
            <Team team={team} key={team.idTeam}></Team>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
