import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton/TabButton";
import Section from "./Section";
import Tabs from "./TabButton/Tabs";

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton.toLowerCase());
    }
    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
                Object.keys(EXAMPLES).map((key) => (
                    <TabButton
                        key={key}
                        isSelected={selectedTopic == key}
                        onClick={() => handleSelect(key)}
                    >
                        {key}
                    </TabButton>
                ))
            }>
                {selectedTopic ?
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>

                    </div>
                    :
                    <p>Please select a topic </p>
                }
            </Tabs>

        </Section>
    )
}

export default Examples