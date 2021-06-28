import React, { useEffect, useState } from "react";
import "./accountStyle.css";
import axios from "axios";

export default function Account() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        getUserInfo();
    }, []);

    async function getUserInfo() {
        try {
            const res = await axios.get("/user/info");
            setUsername(res.data.username);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            {username}
        </div>
    );
}