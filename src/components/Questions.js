import { nanoid } from 'nanoid';

export default function Question(props) {
    props.wrongAnswers.push(props.rightAnswer)
    const choices = props.wrongAnswers.map(x => decodeURIComponent(x))
    const decodedQuestion = decodeURIComponent(decodeURIComponent(props.question))

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
    const answers = choices.map(choice => <p key={nanoid()} className="choice">{choice}</p>)
    return (
        <div className='question--container'>
            <h2 className='question'>{decodedQuestion}</h2>
            <div className="choices">
                {answers}
            </div>
        </div>
    )
}