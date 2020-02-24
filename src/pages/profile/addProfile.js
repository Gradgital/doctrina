//Create form to add details
import React, { useState, useEffect } from "react";
import submit from '../formFunc/submit'

function AddProfile({ match }) {
  const [selectedForm, setSelectedForm] = useState("");
  const [userID] = useState(match.params.id);
  const [profile, setProfile] = useState({});
  const [Education, setEducation] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [interests, setInterests] = useState([]);
  const [capacity, setCapacity] = useState("");
  const [degree, setDegree] = useState("")
  const [projects, setProjects] = useState([]);
  const [LOB, setLOB] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [repositoryUrl, setRepositoryUrl] = useState([]);
  const [data, setData] = useState([]);
  const [textValue,setTextValue] = useState("");
  const [name, setName] = useState("Name");
  const [surname, setSurname] = useState("Name");
  const [position, setPosition] = useState("Name");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
   
  }, [Education]);


  function onOptionChange(e) {
    let targetValue = e.target.value;
    setSelectedForm(targetValue);
  }

function onProjectAdd(e){
    e.preventDefault();
    let value = projects;
    value.push(textValue);
    setProjects(value);
     alert("project  added");
}

function onInterestAdd(e){
    e.preventDefault();
    let value = interests;
    value.push(textValue);
    setInterests(value);
     alert("interests added");
} 
function onEducationAdd(e){
    e.preventDefault();
    let value = Education;
    value.push(degree + " " + textValue);
    setEducation(value);
    console.log(Education)
     alert("Education  added");
}

  function onCapacityAdd(e){

    e.preventDefault();
    console.log(textValue);
    setCapacity(textValue);
    alert("capacity added");

  }

    function onCertificatesAdd(e){

    e.preventDefault();
    let value = certificates;
    value.push(textValue);
    setCertificates(value);
     alert("certificate added");

  }
  
    function onRepoAdd(e){

    e.preventDefault();
    let value = repositoryUrl ;
    value.push(textValue);
    setRepositoryUrl(value);
      alert("repo added");

  }

      function onOptionChange(e){

    e.preventDefault();
    let value = technologies;
    value.push(e.target.value);
    setTechnologies(value);
    alert("technoloy added");
    console.log(technologies);

  }
  
      function onLobChange(e){

        e.preventDefault();
        let value = LOB;
        value.push(textValue);
        setLOB(value);
         alert("Preffered Lob added");
    

  }

        function onAddProfile(e){
          e.preventDefault();
          let data = {};

          data["profile"] = profile;
          data["education"] = Education;
          data["interests"] = interests;
          data["lob"] = LOB;
          data["certificates"] = certificates;
          data["capacity"] = capacity;
          data["projects"] = projects;
          data["technologies"] = technologies;
          data["repositoryUrl"] = repositoryUrl;
          
          console.log(data);

          submit(data,"DoctrinaUsers")

          setData(data);

          alert('Your data has been submited');

  }

  function returnForm (e){
    return(

      e.map((e) =>
     <p>{e}</p>
   )
    )

  }

  return (
    <div class="flex mb-4">
      <div className="w-full  flex m-8 flex-wrap">
        <h1 className="w-full page-title ">
          {" "}
          Add Profile
        </h1>

   

        <div className="w-full h-full flex justify-center">
    

          <div className="col-sm-6 content-alignment">
          {/* user details */}
            <form className="reviews-form">

            <div className="form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  name="name"
                  onChange={e => setProfile(Object.assign(profile,{[e.target.name]:e.target.value}))}
                  placeholder="Please enter name"
                  required>
                  </input>

             
              </div>
              {/* surname */}
                <div className="form-group">
                <label>Surname</label>
                <input
                  className="form-control"
                  type="text"
                  id="Surname-Name"
                  name="surname"
                  onChange={e => setProfile(Object.assign(profile,{[e.target.name]:e.target.value}))}
                  placeholder="Please enter surname"
                  required
                ></input>
              </div>
              {/* profile url */}
                      <div className="form-group">
                <label>Profile Image</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  name="profileImage"
                  onChange={e => setProfile(Object.assign(profile,{[e.target.name]:e.target.value}))}
                  placeholder="Please enter name"
                  required
                ></input>
              </div>

                          <div className="form-group">
                <label>Select Degree</label>

                <select
                  className="form-control"
                  id="review-type"
                  defaultValue={"default"}
                  onChange={(e) => setDegree(e.target.value)}
                >
                  <option value="default" disabled hidden>
                    Select  type of qualification
                  </option>
                  <option value="BSc">BSc</option>
                  <option value="NDip">Ndip</option>
                  <option value="WeThinkCode">WeThinkCode</option>
                </select>
                   </div>

                            <div className="form-group">
                <label>Education</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  name="profileImage"
                  onChange={e => setTextValue(e.target.value)}
                  placeholder="Please enter the name of your qualification"
                  required
                ></input>

                      <button className="bg-green p-2 rounded text-white m-4" onClick={onEducationAdd}>Add Education</button>
              
              </div>
         
               </form>

               <form className="reviews-form">

         
       

            

            <div className="form-group">
                <label>What Certificates do you have</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  name="Education"
                  onChange={e => setTextValue(e.target.value)}
                  placeholder="Please enter the certificates that you have"
                  required
                ></input>

                   <button className="bg-green p-2 rounded text-white m-4" onClick={onCertificatesAdd}>Add this certificate</button>
              </div>

                    
            <div className="form-group">
                <label>What Capacity do you have left</label>
                <input
                  className="form-control"
                  type="text"
                  id="capacty"
                  name="capacity"
              onChange={e => setTextValue(e.target.value)}
                  placeholder="Please enter capacity left"
                  required>
                  </input>

                   <button className="bg-green p-2 rounded text-white m-4" onClick={onCapacityAdd}>Add reamining capcity</button>
              </div>
              
                        <div className="form-group">
                <label>What Projects have you worked on eg. Graduate: Onboarding/Business Race Center</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  name="Education"
                  onChange={e => setTextValue(e.target.value)}
                  placeholder="Please enter the project's you have worked on "
                  required>
                  </input>

                   <button className="bg-green p-2 rounded text-white m-4" onClick={onProjectAdd}>Add project</button>
              </div>

                              <div className="form-group">
                <label>What are your personal interests</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  name="interests"
                  onChange={e => setTextValue(e.target.value)}
                  placeholder="Please enter the project's you have worked on "
                  required>
                  </input>

                   <button className="bg-green p-2 rounded text-white m-4" onClick={onInterestAdd}>Add Interest</button>
              </div>


              
              <div className="form-group">
                <label>Select technologies inerested in</label>

                <select
                  className="form-control"
                  id="review-type"
                  defaultValue={"default"}
                  onChange={onOptionChange}
                >
                  <option value="default" disabled hidden>
                    Select technology you like
                  </option>
                  <option value="Sharepoint">Sharepoint</option>
                  <option value="Azure">Azure</option>
                  <option value="C#">C#</option>
                  <option value="JS">JS</option>
                  <option value="Xamarin">Xamarin</option>
                </select>
                   </div>

                   <div className="form-group">
                <label>What Lob you interested in eg. Data Services : Analytics BI</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  name="interests"
                  onChange={e => setTextValue(e.target.value)}
                  placeholder="Please enter the project's you have worked on "
                  required>
                  </input>

                   <button className="bg-green p-2 rounded text-white m-4" onClick={onLobChange}>Add Interest</button>
              </div>

                            <div className="form-group">
                <label>URL's to your Repos</label>
                <input
                  className="form-control"
                  type="text"
                  id="First-Name"
                  name="Education"
                  onChange={e => setTextValue(e.target.value)}
                  placeholder="Please enter url to a repo"
                  required>
                  </input>

                   <button className="bg-green p-2 rounded text-white m-4" onClick={onRepoAdd}>Add Repo URL</button>
              </div>
              

                   <button className="bg-green p-2 rounded text-white m-4" onClick={onAddProfile}>Submit Data</button>
              
         
         
         
               </form>
               {JSON.stringify(data)}
            </div>


            




         
   
        
        
        
        
        </div>
      
        
     

        <div className="w-full">{/* {chooseForm(selectedForm)} */}</div>
      </div>
    </div>
  );
}

export default AddProfile;


//http://localhost:3000/submitReviews/{userID}