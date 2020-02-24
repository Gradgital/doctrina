import React, { useState, useEffect } from "react";
import close from "../../svg/letter-x.svg";

function ProfileCard({ profileData }) {
  const [hide, setHide] = useState("hidden");
  const [userId] = useState(profileData.profile.name);
  const [viewData, setViewData] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(profileData);
  }, [profileData]);

  function educationList() {
    return profileData.education.map(e => (
      <div className="education text-lg m-2">{e}</div>
    ));
  }

  function technologiesList() {
    return profileData.technologies.map(e => (
      <div className="p-2 bg-black m-1 flex rounded text-white text-lg">
        {e}
      </div>
    ));
  }

  function projectList() {
    return profileData.projects.map(e => (
      <div className="p-2 bg-blue m-1 flex rounded text-white text-lg">{e}</div>
    ));
  }

  function projectCertificates() {
    return profileData.certificates.map(e => (
      <div className="p-2 bg-green m-1 flex rounded text-white text-lg">
        {e}
      </div>
    ));
  }

  function lobList() {
    return profileData.lob.map(e => (
      <div className="p-2 bg-orange m-1 flex rounded text-white text-lg">
        {e}
      </div>
    ));
  }

  function capacity() {
    return (
      <div className="p-2 bg-grey m-1 flex rounded text-white text-lg">
        {profileData.capacity}
      </div>
    );
  }

  function showData(e) {
    let originalData = e;
    console.log(e);

    let text = "";

    // setToggle(!toggle)
    // if(toggle){
    //    text= "";
    // }else{

    //     originalData.map((e,i)=>{

    //       text = text + e;
    //         if( i < (originalData.length-1) ){

    //             text=  text + ", ";
    //         }
    //         else{
    //             text = text + ". " ;

    //         }

    //     })
    // }

    setViewData(e);
  }

  function showCapacity() {
    setViewData(profileData.capacity);
  }

  function setClose(e) {
    console.log("x");
    if (e) {
      return (
        <img
          onClick={() => {
            setToggle(!toggle);
            setViewData("");
          }}
          className="cursor-pointer w-6 rounded-full p-1 border"
          src={close}
          alt="close"
        ></img>
      );
    } else {
    }
  }

  return (
    <div className="max-w-xl  flex justify-start flex-wrap m-2  ">


      <div className="w-full  p-2">
        <div className="w-full flex flex-wrap">{technologiesList()}</div>
      </div>

      <div className="w-1/2 p-1">
        <img
          className="w-full -mx-1 overflow-hidden"
          src={profileData.profile.profileImage}
          alt="profile"
        ></img>
      </div>

      <div className="w-1/2">
        <div className="name text-3xl m-2">
          {profileData.profile.name} {profileData.profile.surname}
        </div>

        <div classNam="w-full h-5 flex overflow-hidden">{educationList()}</div>

      

        <div className="w-full flex flex-wrap ">{projectCertificates()}</div>

        <div className="w-full flex flex-wrap ">{lobList()}</div>

        <div className="w-full flex flex-wrap ">{capacity()}</div>

        <div className="w-full flex flex-wrap ">
          <a
            className="bg-red p-2 text-white rounded text-lg"
            href={"https://doctrinah.trafficmanager.net/review/" + userId}
          >
            {" "}
            View {profileData.profile.name} Reviews{" "}
          </a>
        </div>

        {/*        
            
            <div className="flex flex-wrap justify-start">   
           
            <select onChange={(e) => showData(e.target.value)}>
          <option value="" disabled="" hidden="" selected="">Select your desired category</option>
    
         <option value={profileData.technologies}>Technologies</option>
         <option value={profileData.projects}>Projects</option>
         <option value= "">Capacity</option>
         <option value={profileData.certificates}>Certification </option>
         <option value={profileData.lob}>Interested LOB</option>
         <option value=" "> <a href={"http://doctrinah-qa.azurewebsites.net/review/"+userId}> Reviews </a> </option>


          </select>
   </div> */}
      </div>
    
    <div className="w-full  p-2">
    <div className="w-full flex flex-wrap ">{projectList()}</div>
    </div>
    </div>
  );
}

export default ProfileCard;
