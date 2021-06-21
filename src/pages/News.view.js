import ViewShowNews from "../components/ShowNews.view"

function ViewNews() {

    let myNews = [
        {
            uuid: "123",
            title: "opa",
            date: "05/05/2005",
            body: "Super notícia"
        },
        {
            uuid: "321",
            title: "opa2",
            date: "10/10/2010",
            body: "Super notícia 2"
        }
    ]

    console.log(myNews)

    return (
        <div>
            Ver Notícias<br />
            {
                myNews.map((noticia) => {
                    return (
                        <div>
                            <ViewShowNews itle={noticia.title} date={noticia.date} body={noticia.body}></ViewShowNews>
                            <button value={noticia.uuid}>Excluir</button>
                        </div>
                    )
                })
            }

            <a href="/">Voltar para a home</a>
        </div>
    );
}

export default ViewNews;
