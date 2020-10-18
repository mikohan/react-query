import React from 'react';

function Navbar(props) {
    const {setPage} = props
    return (
        <nav>
           <button onClick={()=> setPage('planets')}>Planets</button>
           <button onClick={()=> setPage('people')}>People</button> 
        </nav>
    );
}

export default Navbar;