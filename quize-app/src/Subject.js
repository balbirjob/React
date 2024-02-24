import React from 'react'
import Question from './Question'
import './style.css'
import  { useState } from 'react'




export function Java() {

  const javaQ = [

    //question 1
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'

    },
    //question 2
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'
    },
    //question 3
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'

    },
    //question 4
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'
    }
  ]


  const [answers, setAnswers] = useState({})
  const handlesSubmit =(event) =>{

  }
  const  handleOnChange = (questionNum, selectedOption) =>{

  }

  return (
    <div>
      <h1>Java</h1>
      <form  onSubmit={handlesSubmit}>
        {
          javaQ.map(
            (question) => (
  
              <Question
                qnum = {question.qnum}
                ques = {question.ques}
                opA = {question.opA}
                opB = {question.opB}
                opC = {question.opC}
                opD = {question.opD}
                ans = {question.ans}
                onChange ={handleOnChange}
              />
            
            )
          )
        }
        <br></br><br></br>
        <button type='submit'>Get Result</button>
      </form>

    </div>
  )
}




export function Sql() {

  const sqlQuestions = [

    //question 1
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'

    },
    //question 2
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'
    },
    //question 3
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'

    },
    //question 4
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'
    }
  ];


  return (
    <div>
      <h1>SQL</h1>
      <form>
        {
          sqlQuestions.map(
            (question) => (

              <Question
                qnum={question.qnum}
                ques={question.ques}
                opA={question.opA}
                opB={question.opB}
                opC={question.opC}
                opD={question.opD}
                ans={question.ans}
              />

          )
          )
        }
        <br></br><br></br>
        <button type='submit'>Get Result</button>
      </form>

    </div>
  )
}





export function Html() {


  const htmlQuestions = [

    //question 1
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'

    },
    //question 2
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'
    },
    //question 3
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'

    },
    //question 4
    {
      qnum: '1',
      ques: '5 + 6 = ?',
      opA: '56',
      opB: '11',
      opC: '10',
      opD: '18',
      ans: 'D'
    }
  ];

  return (
    <div>
      <h1>HTML</h1>
      <form>
        {
          htmlQuestions.map(
            (question) => (

              <Question
                qnum={question.qnum}
                ques={question.ques}
                opA={question.opA}
                opB={question.opB}
                opC={question.opC}
                opD={question.opD}
                ans={question.ans}
              />

            )
          )
        }
        <br></br><br></br>
        <button type='submit'>Get Result</button>
      </form>

    </div>
  )
}


