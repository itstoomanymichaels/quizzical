import { nanoid } from 'nanoid';

export default function Question(props) {
    props.wrongAnswers.push(props.rightAnswer)
    const choices = props.wrongAnswers

    function shuffle() {
        let x, y, z = choices.length
        while (z--) {
            y = Math.floor(Math.random() * (z + 1)) || 0
            x = choices[z]
            choices[z] = choices[y]
            choices[y] = x
        }
    }
    shuffle()
    const answers = choices.map(choice => <p key={nanoid()}>{choice}</p>)
    console.log(answers)
    return (
        <div className="question">
            <h2>{props.question}</h2>
            <div className="choices">
                {answers}
            </div>
        </div>
    )
}