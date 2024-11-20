'use client'
import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser'

interface Question{
    question: string;
    answer: string;
}

export default function Question({question} : {question:Question}) {
    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <>
    <article className='flex items-center justify-between p-4 lg:p-6 cursor-pointer' onClick={() => setShowAnswer(!showAnswer)}>

        <h2>
            {question.question}
        </h2>

        <ul>
            {!showAnswer && (
                <li key={1}>
                    <button onClick={() => 
                        setShowAnswer(true)
                    }>
                        <i className='fas fa-plus mr-2 text-sm'></i>
                    </button>
                </li>
            )}

            {showAnswer && (
                <li key={2}>
                    <button onClick={() => 
                        setShowAnswer(false)
                    }>
                        <i className='fas fa-minus mr-2 text-sm'></i>
                    </button>
                </li>
            )}
        </ul>
    </article>

    <article
        className={`${showAnswer && "border-t border-gray-400 p-4 lg:p-6 text-center"}`}
        >
        {showAnswer && <p>{HTMLReactParser(question.answer)}</p>}
    </article>
    </>
  )
}
