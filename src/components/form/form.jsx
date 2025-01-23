import { cardData } from "../../assets/data.js";

function Form() {



    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
        const newFlashcard = {
            question: event.target.question.value, 
            answer: event.target.answer.value
            };
        cardData.push(newFlashcard);
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