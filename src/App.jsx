import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data';

function App() {
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
            </main>
        </div>
    );
}

export default App;