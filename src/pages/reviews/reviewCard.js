import React, { useState, useEffect } from 'react';



function ReviewCard({revieweData}) {

    const [userId] = useState("")
    const [viewData,setViewData] = useState("");
    const[type] = useState(revieweData.type)


  return (
 
          
          
          <div className="w-1/4 rounded   flex justify-start flex-wrap shadow p-2 m-2">
          
          <div className="w-full">{type}</div>
          <div className="w-full">{revieweData.Comment}</div>
          <div className="w-full">{revieweData.reviewerName} {revieweData.reviewerSurname}</div>


      
      
      
      </div>
     

  );
}

export default ReviewCard;
