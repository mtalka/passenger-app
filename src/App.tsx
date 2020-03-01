import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllPosts } from "./dataservice";

function App() {
    const [posts, setPosts]: any[] = useState([]);

    useEffect(() => {
        getAllPosts().then(result => {
            setPosts(result);
        });
    }, []);

    return (
        <div>
            <h1>Passenger app</h1>
            {posts.map((p: { title: string; text: string; date: Date }) => (
                <>
                    <div>{p.title}</div>
                    <div>{p.text}</div>
                    <div>{p.date}</div>
                </>
            ))}
        </div>
    );
}

export default App;
