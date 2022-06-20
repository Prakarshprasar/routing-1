import React from 'react'
import style from "./sublandbody.module.css"

const Sublandbody = () => {
    let arr=[
        {id: 1,img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png",company:"Flipkart >",text:"488 Interviews"},
        {id: 2,img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png",company:"Byjus >",text:"712 Interviews"},
        {id: 3,img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png",company:"TCS >",text:"2.5k Interviews"},
        {id: 4,img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png",company:"Accenture >",text:"3.2k Interviews"},
        {id: 5,img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png",company:"Cognizant >",text:"1.7k Interviews"},
        {id: 6,img:"https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png",company:"Amazon >",text:"1.9k Interviews"}

    ]
    let arr1=[
        {id: 1,text1:"Software Engineer ",text2:"(7.2K+ questions)"},
        {id: 2,text1:"Business Analyst ",text2:"(2.8K+ questions)"},
        {id: 3,text1:"Consultant ",text2:"(2.4K+ questions)"},
        {id: 4,text1:"Financial Analyst ",text2:"(894 questions)"},
        {id: 5,text1:"Sales & Marketing ",text2:"(991 questions)"},
        {id: 6 ,text1:"Quality Engineer ",text2:"(1.3K+ questions)"}
    ]
  return (
    <div>
    <div className={style.subbody}>
        <div className={style.subdiv1}>
            <span className={style.inbox}>by Ambition Box</span>
            <p className={style.larger}>Prepare for your next interview</p>
            <img src="https://static.naukimg.com/s/0/0/i/ab-interview.png" alt="" />
        </div>
        <div className={style.center}>
            <p className={style.medium}>Interview questions by company</p>
            <div className={style.grid}>
                {arr.map((elem)=>(
                    <div className={style.flex} key={elem.id}>
                        <img src={elem.img} alt="" />
                        <div>
                            <p className={style.med}>{elem.company}</p>
                            <p>{elem.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className={style.blue}>View all companies :- </p>
        </div>

        <div className={style.center}>
            <p className={style.medium}>Interview questions by role</p>
            <div className={style.subtdiv}>
                {arr1.map((elem)=>(
                    <p className={style.tdivp}  key={elem.id}>{elem.text1}<span>{elem.text2}</span></p>
                ))}
            </div>
            <p className={style.blue}>View all Roles :-</p>
        </div>
    </div>
    </div>
    
    
  )
}

export default Sublandbody