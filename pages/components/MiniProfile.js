function MiniProfile() {
    return (

        <div className="flex item-center justify-between mt-14 ml-10">
            <img className=" w-16 h-16 rounded-full border p-[2x]" src="https://th.bing.com/th/id/OIP.aU_Ef_VAKBnPEWmD2vs7LwHaHa?pid=ImgDet&rs=1" alt="" />
            <div className="flex-1 mx-4">
                <h2 className="font-bold">ayushi_rai</h2>
                <h3 className="text-sm text-gray-400 ">Welcome to Instagram</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}
export default MiniProfile