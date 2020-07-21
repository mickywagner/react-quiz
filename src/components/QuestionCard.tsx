import React from 'react'

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestion: number;
}

const QuestionCard = () => {
    return(
        <div>
            Question Card
        </div>
    )
}

export default QuestionCard