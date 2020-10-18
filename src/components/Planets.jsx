import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet'

const fetchPlanets = async () => {
	const res = await fetch(`http://swapi.dev/api/planets`);
	return await res.json();
};

function Planets(props) {
	const { data, status } = useQuery('planets', fetchPlanets);
	console.log(data, status);
	return (
		<div>
			<h1>Planents component</h1>
			{status === 'loading' && (
				<div>
					<h1>Data is loading...</h1>
				</div>
			)}
			{status === 'error' && (
				<div>
					<h1>Error to load data</h1>
				</div>
			)}
			{status === 'success' && (
				<div>
					{data.results.map((item) => (
						<Planet key={item.name} planet={item}></Planet>
					))}
				</div>
			)}
		</div>
	);
}

export default Planets;
