
import React, {useState} from 'react';
import {Button} from "@mui/material";

function SummaryComponent({ questions, userAnswers, onReanswer, reansweredQuestions }) {
    const [showModal, setShowModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(null);

    const handleReanswerClick = (question) => {
        setCurrentQuestion(question);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setCurrentQuestion(null);
    };

    const handleAlternativeClick = (answerObj) => {
        // Compare the selected answer with the correct answer
        const isCorrect = answerObj.is_correct;

        // Call the onReanswer function with the question and the result of the comparison
        onReanswer(currentQuestion, answerObj);

        // Close the modal
        handleModalClose();
    };


    return (
        <div>
            <h2>Quiz Summary</h2>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        {question.question} -
                        <span style={{ color: userAnswers[index] ? 'green' : 'red' }}>
                            {userAnswers[index] ? 'Correcta' : (
                                <>
                                    Incorrecta
                                    {!reansweredQuestions.includes(question) && userAnswers[index] !== true && (
                                        <button onClick={() => handleReanswerClick(question)}>Answer Again</button>
                                    )}
                                </>
                            )}
                        </span>
                    </li>
                ))}
            </ul>

            {showModal && (
                <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', zIndex: 1000 }}>
                    <h3>{currentQuestion.question}</h3>
                    <ul>
                        {currentQuestion.answers.map((answerObj, index) => (
                            <li key={index}>
                                <Button onClick={() => handleAlternativeClick(answerObj)}>{answerObj.answer}</Button>
                            </li>
                        ))}
                    </ul>
                    <Button onClick={handleModalClose}>Close</Button>
                </div>
            )}
        </div>
    );
}

export default SummaryComponent;
