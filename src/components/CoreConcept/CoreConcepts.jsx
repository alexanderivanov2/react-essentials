import { CORE_CONCEPTS } from "../../data"
import CoreConcept from "./CoreConcept"

function CoreConcepts() {
    return (
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
    )
}

export default CoreConcepts