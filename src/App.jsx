import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
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
                        {Object.keys(EXAMPLES).map((key) => (
                            <TabButton
                                key={key}
                                isSelected={selectedTopic == key}
                                onSelect={handleSelect}
                            >
                                {key}
                            </TabButton>
                        ))}

                    </menu>
                    {!selectedTopic && <p>Please select a topic </p>}
                    {selectedTopic &&
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>
                                    {EXAMPLES[selectedTopic].code}
                                </code>
                            </pre>

                        </div>
                    }
                </section>

            </main>
        </div>
    );
}

export default App;