import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person'

const fetchPeople = async () => {
	const res = await fetch(`http://swapi.dev/api/people`);
	return await res.json();
};

function People(props) {
	const { data, status } = useQuery('planets', fetchPeople);
	console.log(data, status);
	return (
		<div>
			<h1>People Component</h1>
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
					{data.results.map((person) => (
						<Person key={person.name} person={person}></Person>
					))}
				</div>
			)}
		</div>
	);
}

export default People;