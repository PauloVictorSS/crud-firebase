function ViewCreateNews() {
    return (
        <div>
            Criar Notícia<br />
            <input type="text" placeholder="Título" name="titulo" /><br />
            Data: <input type="date" name="data" /><br />
            <textarea name="noticia" placeholder="Notícia"></textarea><br />
            <button>Cadastrar</button><br />
            <a href="/">Voltar para a home</a>
        </div>
    );
}

export default ViewCreateNews;
