import React from 'react'

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers,
    userAnswer, 
    callback, 
    questionNr, 
    totalQuestion
}) => {
    return(
        <div>
           <p className="number">
               Question: {questionNr} / {totalQuestion} 
           </p>

           <p dangerouslySetInnerHTML={{ __html: question }}></p>
           <div>
            {answers.map(answer => (
                <div key={answer}>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer}} />
                    </button>
                </div>
            ))}
           </div>
        </div>
    )
}

export default QuestionCard