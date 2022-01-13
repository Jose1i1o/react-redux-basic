import { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <Header 
                onIncrease={() => setCount(count + 1)}
                onDecrease = {() => setCount(count - 1)}
            />
                <h1>React App</h1>
            <Footer counter={count}/>
        </>
    );
}

export default App;