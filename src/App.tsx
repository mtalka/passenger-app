import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllPosts, createPost } from "./dataservice";

function App() {
    const [posts, setPosts]: any[] = useState([]);
    const [title, setTitle]: any = useState("");
    const [feedback, setFeedback]: any = useState("");

    useEffect(() => {
        getAllPosts().then(result => {
            setPosts(result);
        });
    }, []);

    function handleSubmit(event: any) {
        event.preventDefault();
        console.log(title, feedback);
        createPost(title, feedback).then(() => {
            setTitle("");
            setFeedback("");
        })
    }

    return (
        <div>
            <h1>Passenger app</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Otsikko:
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                <label>
                    Palaute:
                    <textarea value={feedback} onChange={e => setFeedback(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
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
