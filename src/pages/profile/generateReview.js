//Create form to add details
import React, { useState, useEffect } from "react";


function GenerateReviewUrl({ match }) {

    const [name,setName] = useState("");

  useEffect(() => {
   
  });

  function generateURL(e){
      e.preventDefault();
      alert("https://doctrinah.trafficmanager.net/submitReviews/"+name)
  }


  return (
    <div class="w-screen h-screen flex justify-center items-center">
        
        <div className="w-full max-w-lg">
        <div className="form-group">
                <label>Enter your name</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  onChange={e => setName(e.target.value)}
                  placeholder="Please your enter name"
                  required
                ></input>
              </div>

              <button type="button" onClick={generateURL} className="btn btn-primary btn-margin">Generate Url</button>

      

        </div>


    </div>
  );
}

export default GenerateReviewUrl;


//http://localhost:3000/submitReviews/{userID}