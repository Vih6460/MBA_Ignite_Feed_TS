import { Header } from "./components/header"
import { Post, PostType } from "./components/post"
import { Sidebar } from "./components/sidebar"

import styles from "./app.module.css"
import "./global.css"

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/vih6460.png",
            name: "Vinicius Oliveira",
            role: "Full Stack Developer"
        },
        content: [
            {type: "paragraph", content: "Fala galeraa 👋"},
            {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            {type: "link", content: "jane.design/doctorcare"},
        ],
        publishedAt: new Date("2024-12-15 13:27:48"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "CTO @Rocketseat"
        },
        content: [
            {type: "paragraph", content: "Fala galeraa 👋"},
            {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
            {type: "link", content: "jane.design/doctorcare"},
        ],
        publishedAt: new Date("2024-12-12 20:10:07"),
    },
]

export function App() {

    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {posts.map(post => {
                        return (
                            <Post 
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>
            </div>

        </div>
    )
}