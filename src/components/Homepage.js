import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestion } from "@fortawesome/free-solid-svg-icons"

export default function Homepage(props) {
    return (
        <div id="home--container">
            <FontAwesomeIcon className="question-logo1" icon={faQuestion} />
            <FontAwesomeIcon className="question-logo2" icon={faQuestion} />
            <FontAwesomeIcon className="question-logo3" icon={faQuestion} />
            <div id="content">
                <h1>Quizzical</h1>
                <p>Challenge Your Trivia Knowledge!</p>
                <button id="start" onClick={props.startButton}>Start quiz</button>
            </div>
        </div>
    )
}