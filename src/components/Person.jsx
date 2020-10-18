import React from 'react';
import './styles/planet.scss'

function Person(props) {
	const { person } = props;
	return (
		<div className="card">
			<h3>{person.name}</h3>
			<p>Gender - {person.gender}</p>
			<p>Terrain - {person.birth_year}</p>
		</div>
	);
}

export default Person;
