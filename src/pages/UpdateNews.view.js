function ViewUpdateNews() {
    return (
        <div>
            Atualizar Notícia<br />

            <input type="text" placeholder="Pesquisar notícia" name="pesquisa" /><br />
            A partir de:<input type="date" name="date_pesquisa" /><br />
            ID:<input type="text" name="id_pesquisa" placeholder="id da noticia" /><br />

            <button>Pesquisar</button><br />

            <a href="/">Voltar para a home</a>
        </div>
    );
}

export default ViewUpdateNews;
