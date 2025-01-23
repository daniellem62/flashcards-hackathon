function Form() {
    return (
        <form>
        <h3> Add a new flashcard</h3>
        <label>
            Question:
            <input 
                type="text"
                />
            Answer:
            <input 
                type="text"
                />
        </label>
        <button type="submit">Add flashcard</button>
        </form>
    );
}

export default Form;