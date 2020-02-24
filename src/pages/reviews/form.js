import React, { useState, useEffect } from 'react';
import mentorForm from './mentor';
import peerForm from './peer';
import codeForm from './code';
import submit from '../formFunc/submit';


function ReviewForm({form,userid,reviewerName,reviewSurname}) {

  
    const [comment, setComment] = useState('');

    const [rating, setRating] = useState({});

    const [ratingTotal, setRatingTotal] = useState(1);

    const [selectedForm, setSelectedForm] = useState({});


    useEffect(() => {

        setSelectedForm(form)

    }, [selectedForm,form]);


 
    function chooseForm(e) {
        if (e === "Peer") {
          return (
         <div >
            <FormHeader></FormHeader>
            {returnForm(peerForm)}
            <button onClick={submitReview} type="button" className="btn btn-primary btn-margin">Calculate total ratings</button>
         </div>
   
          );
        } else if (e === "Mentor") {
          return (
            <div >
            <FormHeader></FormHeader>
            {returnForm(mentorForm)}
            <button onClick={submitReview} type="button" className="btn btn-primary btn-margin">Calculate total ratings</button>
         </div>
          );
        } else if (e === "Team") {
          return (
              <div></div>
          );
        } else if (e === "Code") {
          return (
            <div >
            <FormHeader></FormHeader>
            {returnForm(codeForm)}
            <button onClick={submitReview} type="button" className="btn btn-primary btn-margin">Calculate total ratings</button>
         </div>
          );
        }
      }

    
    function submitReview(e) {
         e.preventDefault();
        let newTotal = 0
       
        console.log(comment);
        console.log(rating);

        Object.keys(rating).map(function (key, index) {
            let value = rating[key];
            console.log(value)
            newTotal = parseInt(value) + newTotal;


        });

        setRatingTotal(newTotal)
        alert('submited')

        //Redirect
    }

    function postReview(e) {
      e.preventDefault();
      // var today = new Date()

      console.log(reviewerName)

      let data = {
          ReviewerID: userid,
          Rating: rating,
          RatingTotal: ratingTotal,
          Comment: comment,
          reviewerName: reviewerName,
          reviewerSurname: reviewSurname,
          type: form
      }

      submit(data,"DoctrinaReviews");


      console.log(data)

      // createItem(data,name).then(d => console.log(d))

      // setter
      //localStorage.setItem('MentorReview', JSON.stringify(data));


      alert('Thank you for the review')
  }


    function ratingChange(e) {
        console.log(e.target.value)

        let value = parseInt(e.target.value);

        let currentRating = { [e.target.name]: value }


        setRating(Object.assign(rating, currentRating))
    }

    const InputField = (props) => {
        return(

          <div class="w-full flex">
          <div class="w-full p-2 border-b-2 ">{props.question} </div>
          <div class="w-1/4 p-2"><input className="w-full" type="number" min="1" max="4" name={"Rating "+props.qNo}></input></div>
      </div>
          //   <div class="w-full flex">

          //   <div class="w-full p-2">{props.question} </div>
          //   <div class="w-1/4 p-2">
          //     <input class="w-full border" type="number" min="1" max="4" name={"Rating "+props.qNo} onChange={ratingChange}></input>
          //   </div>


          // </div>
        )

    }

    const FormHeader = () =>{
       return(
         <div>
                 <h4 class="m-1">You are required to rate a graduate with the following: </h4>
      <h4 class="m-1">1 - Poor , 2 - Moderate , 3 - Good , 4 - Excellent</h4>
      
      <div class="w-full flex bg-green text-xl">
        <div class="w-full p-2">Qualities</div>
        <div class="w-1/4 p-2">Ratings</div>
      </div>

      <div class="w-full flex">
          <div class="w-full p-2 review-total-section">Total ratings:  </div>
          <div class="w-1/4 p-2">{ratingTotal}</div>
        </div>

         </div>
       )

    }

    function returnForm (e){
      return(

        e.map((e) =>

        
        <InputField question={e.question} qNo={e.qNo}></InputField>
     )
      )
 
    }

    return (

      
    <div class="w-full  flex justify-center">

    <div class=" flex flex-wrap justify-center">
   
        <form class="w-full flex-wrap font-britehouse-light review-table" id="content">
  
 
            {chooseForm(selectedForm)}
  

  
      
        </form>
  
        <form class="my-4  w-full" onSubmit={postReview}>
          <h2>Add new Comments</h2>

          <textarea class="w-full h-24 border border-green" onChange={(e) => setComment(e.target.value) }></textarea>

               
          <button type="submit" className="btn btn-primary btn-margin">Post comments</button>

        </form>

        
  
      </div>
      

</div>
  
    );
}

export default ReviewForm;

