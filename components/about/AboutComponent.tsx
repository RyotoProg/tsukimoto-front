import React from 'react'
import Questions from '../json/Faq.json'
import Question from './Question'

interface Quest{
    question: string;
    answer: string;
}

export default function AboutComponent() {
  return (
    <>
    <div className='flex flex-col items-center text-[#dddddd] p-2 m-4'>
        {Questions.questions.map((question:Quest)=>(
            <div key={question.question} className='border border-gray-400 w-11/12 rounded-lg m-2'>
                <Question question={question}/>
            </div>
        ))}
    </div>
    </>
  )
}
