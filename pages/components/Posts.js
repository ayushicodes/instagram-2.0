import Post from "./Post"

const posts = [
    {
        id: "123",
        username: "ayushi_rai",
        userImg: "https://th.bing.com/th/id/OIP.aU_Ef_VAKBnPEWmD2vs7LwHaHa?pid=ImgDet&rs=1",
        img: "https://th.bing.com/th/id/OIP.aU_Ef_VAKBnPEWmD2vs7LwHaHa?pid=ImgDet&rs=1",
        caption: "This is Shit",
    },
]



function Posts() {
    return (
        <div>
            {posts.map((post) => (

                <Post key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption} />
            ))}
            {posts.map((post) => (

                <Post key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption} />
            ))}


        </div>
    )
}
export default Posts 