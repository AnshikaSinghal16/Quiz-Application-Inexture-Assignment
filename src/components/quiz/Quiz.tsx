import React , {FC, useEffect, useState} from "react";
import * as S from "./styles/styles"
import { useAppSelector } from "../../redux/hooks";
import { quizDataResponses } from "../../redux/quizDataSlice";
import { Button } from "../atoms/button/Button";


export const Quiz :FC  = () =>{

  const quizData = useAppSelector(quizDataResponses);
  const [active,setActive] =useState(0);
  const [currentQuestion,setCurrentQuestion] = useState<any>();
  const [currentSelectedValue , setCurrentSelectedValue] = useState<any>();
  const [selectedList, SetSelectedList] =useState<any>([]);
  const [showFinalResult ,setShowFinalResult] =useState(false);
  const [successResult ,setSuccessResult] = useState(0);

  useEffect(()=>{
    if(quizData){
      const questionData =quizData.find((item:any,index:any)=>{
        return index == active
      });
      setCurrentQuestion(questionData);
    }
  },[quizData,active])
  
  useEffect(()=>{
    if(active>=0)
    {
    var currentSelectedValue=selectedList.find((item:any,index:any)=>{
      return item.id==active;
    })?.selectedValue;
    const optionValue =quizData && currentSelectedValue ? quizData[active].Options[currentSelectedValue-1]:""
    setCurrentSelectedValue(optionValue);
  }
  },[active])

  const nextHandler = () =>{
    if(quizData?.length == active+1){
      var count =0;
     quizData.map((quiz:any,index:any)=>{
      var value = selectedList.find((item:any,newIndex:any)=>{
        return item.id == index;
      })
      if(value?.selectedValue==quiz.RightAnswer){
        count++;
      }
     })
     setShowFinalResult(true);
     setSuccessResult(count);
    }
    else{
    setActive(active+1);
    localStorage.setItem("currentActive",active.toString());
    }
  }

  const backHandler = () =>{
    if(active>0)
    {
      setActive(active-1);
    }
  }
  const radioChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    var value =e.target.value;
    setCurrentSelectedValue(value);
    var newselectedList:any;
    const  selectedOption =currentQuestion.Options.indexOf(value);
    if(selectedList[active]){
      selectedList[active].selectedValue=selectedOption+1;
      newselectedList=selectedList;
    }
    else{
    newselectedList =[...selectedList,{id:active,selectedValue:selectedOption+1}]
    SetSelectedList(newselectedList)
    }
  }
    return (
        <S.Content isReversed={false}>
        <section className="container mb-60">
        <div className="row justify-content-center p-0">
          <h1 className="container-quiz-heading">Your Quiz</h1>
          <hr/>
          {/* Quiz Section Container */}
          {!showFinalResult && <div>
            {currentQuestion && quizData && quizData.length && <div className="questions">
            <label className="question-statement">
              {"You are on " + (active+1) + " / " + quizData.length}
            </label>
            <label className="question-statement">
              {active+1 + ". " + currentQuestion.Question}
            </label>
            {currentQuestion?.Options && currentQuestion?.Options.length>0 &&
            currentQuestion?.Options.map((option:any,index:any)=>{
              return (
                <div className="radio-options">
              <input
              type="radio"
              name={`radio-${active}`}
              value={option}
              onChange={radioChangeHandler}
              id={index}
              className="radio-circle"
              checked={option==currentSelectedValue}
            />
            <label >
                {option}
              </label>
              </div>
              )
            })
            }
            </div>}
            <div className="quiz-button-table">
            <div className="quiz-button-row">
              <div className="quiz-button-cell">
              <Button label={"BACK"} onClick={backHandler}  inverse={true}/> </div>
              <div className="quiz-button-paycell">
                <Button label={quizData?.length == active+1?"SUBMIT":"NEXT"} onClick={nextHandler} />
              </div>
            </div>
            </div>
          </div>}

            {/* Final Result Container */}
          {showFinalResult &&<> <div className="result-statement">
            Hooray !! You have completed your quiz .
            </div>
            <div className="result-new-row">
            Your score is   <span className="result-score">{successResult}</span> . Out of   <span className="result-score">{quizData.length} </span>  You have gained <span className="result-score">{successResult}</span>.
            </div> 

            <div className="submitted-section">
              <div className="submitted-answers">
              <label className="submittedquestion-statement">
                  Questions which have been submitted by you 
              </label>
              </div>
              <div className="quiz-submitted-questions-answers">
                {quizData && selectedList && selectedList.map((list:any, index : any)=>{
                  return (
                    <>
                  <label className="submitted-question-statement">
                  {index+1 + ". " + quizData[list.id].Question}
                </label>
                {quizData[list.id] && quizData[list.id]?.Options.length>0 &&
                  quizData[list.id]?.Options.map((option:any,index:any)=>{
                  return (
                    <div className="submitted-radio-options">
                  <input
                  type="radio"
                  name={`radio-${list.id}`}
                  value={option}
                  disabled={true}
                  id={index}
                  className="radio-circle"
                  checked={index==list.selectedValue-1}
                />
                <label >
                    {option}
                  </label>
                  </div>
                  )
                })
                }
                </>
                )
                })}
              </div>
            </div>
            
            </>}
        </div>

      </section>
      </S.Content>
    )
}