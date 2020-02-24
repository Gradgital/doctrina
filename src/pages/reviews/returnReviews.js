import React, { useState, useEffect } from "react";
import returnData from '../formFunc/return'
import returnBy from "../formFunc/returnBy";
import ReviewCard from "./reviewCard";


function ReturnReviews({match}) {

    const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);
    const [viewData] = useState(["RatingTotal","reviewerName","type","Rating","Comment","reviewerSurname"]);

      useEffect( () => {
          
          
         async function fetchData() {

            let find =JSON.stringify({field:"ReviewerID",value:match.params.id})

    // You can await here
    const response = await returnBy(viewData,"DoctrinaReviews",find);

     setData(response.data.getParamObject)

    if(response !==[]){
        return false
    }else{
        return true
    }
    
  }
  fetchData().then(d => setLoading(d));



         
  },[]);

 

 function showReviews(e){
     console.log(data);
     if(e){
         return(
             <div>Loading</div>
         )
     }else{
        if (data.length == 0) {
            return(
                <div>No Reviews</div>
            )
              
        }else{
            return(
                data.map((e) =>{
                    let a = JSON.parse(e)
                    console.log(a);
                    return(
                       <ReviewCard revieweData={a}></ReviewCard>
                    )
       
               }
            )
            )
   
        }
  
       
     }
 }



  return (
    <div className="w-full flex justify-center items-center p-4">
      {showReviews(loading)}
      </div>
  );
}

export default ReturnReviews;
