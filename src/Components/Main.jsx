import React, {useState, useEffect} from "react";
import QuestionContainer from "./QuestionContainer";
import './Style/main.css'

function Main() {
    const [data, setData] = useState(null);
    const [currentQues, setCurrentQues] = useState(0);
    const [correctAswer, setCorrectAnswer] = useState(0);
    useEffect(()=>{
        const quizApi = async () => {
            try {
              const response =
                await fetch("https://opentdb.com/api.php?amount=10&type=multiple");
              const data =await response.json();
             const result = data.results;
                setData(result);
            } catch (error) {alert("Refresh the page with a break please")}
          };
          quizApi();
    },[]);

  
 function skipQuestionFn(){
    setCurrentQues(currentQues + 1);
 }

 function getInput(e){
e.target.checked = true;

    if(e.target.value == data[currentQues].correct_answer) {
        setCorrectAnswer(correctAswer + 1)
    };
    setCurrentQues(currentQues + 1);
    e.target.checked = false;

 }
 function refreshPage(){
    window.location.reload();
 }
  return (
    <>
      <main className="main">
        <h1>Play Quiz</h1>
        <section className="question-container">
           
           {
            data != null ? (
                currentQues < data.length ?(

                    <QuestionContainer questionNumber={currentQues + 1} questionObj={data[currentQues]} fetchFormValue={(e)=>getInput(e)} skipQuestion={()=>skipQuestionFn()}/>
                 
                ) : (
                    <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>Nice! you have completed. Your score is {correctAswer} 
                    <input type="reset" id="reset-btn" onClick={refreshPage} value={'Reset'}/>
                    
                    </div>
                    
                )
            ) : (
                <p>Trying to fetch...</p>
            )
           }
        </section>
      </main>
    </>
  );
}

export default Main;
