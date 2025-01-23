function Form({cards, setCards}) {


    function handleSubmit(event) {
        event.preventDefault(); // Stops the page from refreshing
        console.log("Form submitted");
        const newFlashcard = {
            question: event.target.question.value, 
            answer: event.target.answer.value
            };
        // Update the parent state with the new flashcard
        setCards([...cards, newFlashcard]);

        // Log the updated cards (optional)
        console.log("Updated cards:", [...cards, newFlashcard]);
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
        <h3> Add a new flashcard</h3>
        <label>
            Question:
            <input 
                type="text"
                name="question"
                placeholder="Enter the question"
                />
        </label>
        <br />
        <label>
            Answer:
            <input 
                type="text"
                name="answer"
                placeholder="Enter the answer"
                />
        </label>
        <button type="submit">Add flashcard</button>
        </form>
    );
}

export default Form;