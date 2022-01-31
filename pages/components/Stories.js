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
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {Suggestion.map((profile) => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username} />
            ))}
        </div>)
}
export default Stories