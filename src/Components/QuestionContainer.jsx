import React from 'react'
import './Style/questioncontainer.css'
function QuestionContainer(prop) {
    const incorrectOptions = prop.questionObj.incorrect_answers;
    // console.log(prop.questionObj.correct_answer);
const myArray =[...incorrectOptions,prop.questionObj.correct_answer];
    function shuffleArray(array) {
        let currentIndex = array.length;
        let temporaryValue, randomIndex;
      
        // While there remain elements to shuffle
        while (currentIndex !== 0) {
          // Pick a remaining element
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // Swap it with the current element
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
      const newOptions = shuffleArray(myArray);
      
  return (
   <>
   <h2>Question {prop.questionNumber}</h2>
   <p>{prop.questionObj.question}</p>
    <form action="" className='form' onChange={(e)=>prop.fetchFormValue(e)}>
       <label htmlFor=""><input type="radio" value={newOptions[0]} name="answerOption" id="" /> A. {newOptions[0]}</label> 
       <label htmlFor=""><input type="radio" value={newOptions[1]}name="answerOption" id="" /> B.{newOptions[1]}</label> 
       <label htmlFor=""><input type="radio" value={newOptions[2]} name="answerOption" id="" /> C. {newOptions[2]}</label> 
       <label htmlFor=""><input type="radio" value={newOptions[3]} name="answerOption" id="" /> D. {newOptions[3]}</label> 
    </form>
   <button onClick={()=>prop.skipQuestion()}>Skip</button>
   
   </>
  )
}

export default QuestionContainer
