import faker from "faker"
import { useEffect, useState } from "react"

function Suggestions() {
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: 1
            }
        ))
        setSuggestions(suggestions)
    }
        , [])
    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-xm  mb-5">

                <h3 className="text-sm font-bold text-gray-400"> Suggestions For You</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
            {
                suggestions.map((profile) => (
                    <div key={profile.id}
                        className="flex items-center justify-between mt-3">
                        <img className="w-10 h10 rounded-full border p-[2px]" src="https://th.bing.com/th/id/OIP.aU_Ef_VAKBnPEWmD2vs7LwHaHa?pid=ImgDet&rs=1" alt="" />
                        <div className="flex-1 ml-4">
                            <h2 className="font-semibold text-sm">{profile.username}</h2>
                            <h3 className="text-sm text-gray-400">Works at {profile.company.name}</h3>
                        </div>
                        <button className="text-blue-400 text-xs font-bold">Follow</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Suggestions