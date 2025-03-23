import { EXAMPLES } from "../data";
import TabButton from "./TabButton/TabButton";
import { useState } from "react";

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton.toLowerCase());
    }
    return (
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
    )
}

export default Examples