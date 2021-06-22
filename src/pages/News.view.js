import React, { useEffect, useState } from "react";
import ViewShowNews from "../components/ShowNews.view"
import NewFirebaseClient from "../services/NewFirebaseClient";

function ViewNews() {

    const [newsFeed, setNewsFeed] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const newFirebaseClient = new NewFirebaseClient()
            const allNews = await newFirebaseClient.getAllNews()

            let showNews = allNews.map((noticia) => (
                <ViewShowNews key={noticia.uuid} title={noticia.title} date={noticia.date} body={noticia.body}></ViewShowNews>
            ))

            setNewsFeed(showNews)
        }

        fetchData();
    }, []);

    return (
        <div>
            Ver Notícias<br />

            {newsFeed}

            <a href="/">Voltar para a home</a>
        </div>
    );
}

export default ViewNews;
