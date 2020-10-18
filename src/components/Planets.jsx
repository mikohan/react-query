import React, {useState} from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet'

const fetchPlanets = async (key, greeting, page) => {
    console.log(greeting)
	const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
	return await res.json();
};

function Planets(props) {
    const [page, setPage] = useState(1)
	const { data, status } = useQuery(['planets','hello', page], fetchPlanets, {staleTime: 0});
	
	return (
		<div>
			<h1>Planents component</h1>
            <button onClick={()=> setPage(1)} >Page 1</button>
            <button onClick={()=> setPage(2)} >Page 2</button>
            <button onClick={()=> setPage(3)} >Page 4</button>
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
