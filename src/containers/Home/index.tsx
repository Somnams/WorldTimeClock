import React from 'react';
import { useHistory } from 'react-router';

function Home() {
    const _history = useHistory();

    return <h1 onClick={() => _history.push('/about')}>Home</h1>;
}

export default Home;
