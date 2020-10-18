import React from 'react';
import './styles/planet.scss'

function Planet(props) {
	const { planet } = props;
	return (
		<div className="card">
			<h3>{planet.name}</h3>
			<p>Population - {planet.population}</p>
			<p>Terrain - {planet.terrain}</p>
		</div>
	);
}

export default Planet;
