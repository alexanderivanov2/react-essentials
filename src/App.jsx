import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
    const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');

    function handleSelect(selectedButton) {
        console.log(`Hello World! ${selectedButton}`);
        setSelectedTopic(selectedButton.toLowerCase());
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map(({ title, description, image }, index) => (
                            <CoreConcept
                                key={index}
                                title={title}
                                description={description}
                                image={image}
                            />
                        ))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={handleSelect}>Components</TabButton>
                        <TabButton onSelect={handleSelect}>JSX</TabButton>
                        <TabButton onSelect={handleSelect}>Props</TabButton>
                        <TabButton onSelect={handleSelect}>State</TabButton>
                    </menu>
                    { selectedTopic }
                </section>

            </main>
        </div>
    );
}

export default App;