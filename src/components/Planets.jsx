import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, page) => {
	const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
	return await res.json();
};

function Planets(props) {
	const [page, setPage] = useState(1);
	const { resolvedData, latestData, status } = usePaginatedQuery(
		['planets', page],
		fetchPlanets
	);

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
				<React.Fragment>
					<div>
						{resolvedData.results.map((item) => (
							<Planet key={item.name} planet={item}></Planet>
						))}
					</div>
					<button
						disabled={page === 1}
						onClick={() => setPage((old) => Math.max(old - 1, 1))}
					>
						Previos Page
					</button>
					<span>{page}</span>
					<button
						disabled={!latestData || !latestData.next}
						onClick={() =>
							setPage((old) =>
								!latestData || !latestData.next ? old : old + 1
							)
						}
					>
						Next Page
					</button>
				</React.Fragment>
			)}
		</div>
	);
}

export default Planets;
