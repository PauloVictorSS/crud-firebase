import React, { useEffect, useState } from "react";
import ViewShowNews from "../components/ShowNews.view"
import NewFirebaseClient from "../services/NewFirebaseClient";

function ViewUpdateNews() {

    const [filter_uuid, setUUID] = useState("");
    const [news, setNews] = useState([]);

    function changeValueUUID(event) {
        setUUID(event.target.value)
    }

    async function searchNoticeById() {

        const newFirebaseClient = new NewFirebaseClient()
        const searchedNews = await newFirebaseClient.getNewByUUID(filter_uuid)

        if (searchedNews) {
            let showNews = (
                <div key={searchedNews.uuid}>
                    <ViewShowNews title={searchedNews.title} date={searchedNews.date} body={searchedNews.body}></ViewShowNews>
                    <input type="hidden" name="uuid" value={searchedNews.uuid} />
                    <button>Excluir</button>
                </div>
            )

            setNews(showNews)
        }
        else
            setNews([])
    }

    return (
        <div>
            Atualizar Notícia<br />

            UUID:<input type="text" name="filter_uuid" placeholder="id da noticia" onChange={changeValueUUID} />
            <br />

            <button type="submit" onClick={searchNoticeById}>Pesquisar</button><br />

            {news}

            <a href="/">Voltar para a home</a>
        </div>
    );
}

export default ViewUpdateNews;
