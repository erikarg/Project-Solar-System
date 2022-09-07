import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const showMissions = missions.map((mission) => (
      <MissionCard
        name={ `Nome: ${mission.name}` }
        year={ `Ano: ${mission.year}` }
        country={ `Origem: ${mission.country}` }
        destination={ `Destino: ${mission.destination}` }
        key={ mission.name }
      />
    ));
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        { showMissions }
      </div>
    );
  }
}

export default Missions;
