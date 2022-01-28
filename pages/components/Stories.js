import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
    const [Suggestion, setSuggestion] = useState([])
    useEffect(() => {

        const Suggestion = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: 1,
        }))
        setSuggestion(Suggestion)
    }, []);


    return (
        <div>
            {Suggestion.map((profile) => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username} />
            ))}
        </div>)
}
export default Stories