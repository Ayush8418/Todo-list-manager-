import React from "react";

function Calander(){
    var months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var date0 = date.getDate();
    date.setDate(1);
    var startDay = date.getDay();

    var months30 = [4,6,9,11];
    var months31 = [1,3,5,7,8,10,12];
    let dates;
    if(month in months30){
        dates = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    }else if(month in months31){
        dates = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    }else{
        if(year%4===0){
            dates = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        }else{
            dates = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        }
    }
    
    console.log(startDay);
    return <div className="calander">
        <h1 className="monthName">{months[month]}</h1>
        <div className="dayGrid">
            <div className="dayName">M</div>
            <div className="dayName">T</div>
            <div className="dayName">W</div>
            <div className="dayName">T</div>
            <div className="dayName">F</div>
            <div className="dayName">S</div>
            <div className="dayName">S</div>
        </div>
        <div className="dateGrid">
            {dates.map((num,index) => {
                if(index+1 === date0) return <div className="today">{index+1}</div>
                else return <div>{index+1}</div>
            })}
        </div>
    </div>
}

export default Calander;