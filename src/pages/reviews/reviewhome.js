import React, { useState, useEffect } from "react";

import ReviewForm from "./form";

function Review({ match }) {
  const [selectedForm, setSelectedForm] = useState("");
  const [userID] = useState(match.params.id);
  const [name, setName] = useState("Name");
  const [surname, setSurname] = useState("Name");
  const [position, setPosition] = useState("Name");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {}, [selectedForm]);

  function chooseForm(e) {
    if (e === "Peer") {
      return (
        <ReviewForm form="Peer" userid={userID} reviewerName={name} reviewSurname={surname}></ReviewForm>
      );
    } else if (e === "Mentor") {
      return (
        <ReviewForm form="Mentor" userid={userID}  reviewerName={name} reviewSurname={surname}></ReviewForm>
      );
    } else if (e === "Team") {
      return (
        <ReviewForm form="Team" userid={userID}  reviewerName={name} reviewSurname={surname}></ReviewForm>
      );
    } else if (e === "Code") {
      return (
        <ReviewForm form="Code" userid={userID}  reviewerName={name} reviewSurname={surname} ></ReviewForm>
      );
    }
  }

  function onOptionChange(e) {
    let targetValue = e.target.value;
    setSelectedForm(targetValue);
  }

  return (
    <div class="flex mb-4">
      <div className="w-full  flex m-8 flex-wrap">
        <h1 className="w-full page-title ">
          {" "}
          Review {match.params.id}
        </h1>

        <div className="w-full h-full flex justify-center">
    

          <div className="col-sm-6 content-alignment">
            <form className="reviews-form">
              <div className="form-group">
                <label>Reviewer First Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  onChange={e => setName(e.target.value)}
                  placeholder="Please enter your name"
                  required
                ></input>
              </div>
              <div className="form-group">
                <label>Reviewr Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="Last-Name"
                  onChange={e => setSurname(e.target.value)}
                  placeholder="Please enter your surname"
                  required
                ></input>
              </div>

              <div className="form-group">
                <label>Position</label>
                <input
                  className="form-control"
                  type="text"
                  id="position"
                  onChange={e => setPosition(e.target.value)}
                  placeholder="State your position in the company"
                  required
                ></input>
              </div>

              <div className="form-group">
                <label>Select type of review</label>

                <select
                  className="form-control"
                  id="review-type"
                  defaultValue={"default"}
                  onChange={onOptionChange}
                >
                  <option value="default" disabled hidden>
                    Select a type of review on given options
                  </option>
                  <option value="Mentor">Mentor/Stakeholder</option>
                  <option value="Peer">Peer to Peer</option>
                  <option value="Code">Code Review</option>
                  <option value="Team">Team to Peer</option>
                </select>
              </div>
            </form>
          </div>
          
          <div className="col-sm-8 content-alignment h-screen">
          {chooseForm(selectedForm)}
          </div>
         
         
   
        </div>
      
        
        <div class="w-full  flex justify-center">
      
        </div>

        <div className="w-full">{/* {chooseForm(selectedForm)} */}</div>
      </div>
    </div>
  );
}

export default Review;


//http://localhost:3000/submitReviews/{}