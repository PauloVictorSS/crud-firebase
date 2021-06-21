function ViewShowNews({ title, date, body }) {
    return (
        <div>
            <h4>{title}</h4>
            <p>{date}</p>
            <p>{body}</p>
        </div>
    );
}

export default ViewShowNews;
