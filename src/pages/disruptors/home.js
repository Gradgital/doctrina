import React, { useState, useEffect } from "react";
import returnData from "../formFunc/return";
import ProfileCard from "../profile/viewProfile";

function DistruptorHome() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [viewData] = useState([
    "profile",
    "education",
    "lob",
    "certificates",
    "capacity",
    "projects",
    "technologies",
    "repositoryUrl",
    "tags"
  ]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await returnData(viewData, "DoctrinaUsers");

      setData(response.data.getObject);

      if (response !== []) {
        return false;
      } else {
        return true;
      }
    }
    fetchData().then(d => setLoading(d));
  }, []);

  function showDisruptors(e) {
    console.log(data);
    if (e) {
      return <div>Loading Still Fetching Grads, If this persists then the server are down for maintanace</div>;
    } else {
      return data.map(e => {
        let a = JSON.parse(e);

        let technologies = a.technologies;
        let tag = a.tags;
        if (technologies.includes(filter) || tag.includes(filter)) {
          return <ProfileCard profileData={a}></ProfileCard>;
        } else if (filter === "all") {
          return <ProfileCard profileData={a}></ProfileCard>;
        }
      });
    }
  }

  return (
    <div>
      <h1 class="title">Graduates Profiles</h1>
      <div className=" flex items-center">
        <select
          className="w-64"
          id="review-type"
          defaultValue={"default"}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="default" disabled hidden>
            Filter by Technology
          </option>


          <option value="all">View All</option>
          <option value="Azure">Azure</option>
          <option value="C#">C#</option>
          <option value="JS">JS</option>
          <option value="Xamarin">Xamarin</option>
          <option value="Android">Android</option>
          <option value="Flutter">Flutter</option>
          <option value="Python">Python</option>
        </select>

        <select
          className="max-w-lg"
          id="review-type"
          defaultValue={"default"}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="default" disabled hidden>
            Filter by LOB/Team interest
          </option>

          <option value="all">View All</option>
          <option value="Apps">Apps</option>
          <option value="Consultancy">Consulting Services</option>
          <option value="Dynamics">Dynamics</option>
                 <option value="Data Services">Data Services</option>
          <option value="Productivity">Productivity</option>
          <option value="Deployment Solutions">Deployment Solutions</option>
          <option value="COJ">Public Sector</option>
          {/* <option value="Edcon">Edcon</option> */}
          <option value="Software Services">Software Services</option>
          <option value="Mobility">Mobility</option>
        </select>
      
      <div className="p-2 bg-black text-white rounded text-lg items-center mx-1">Technologies</div>
      <div className="p-2 bg-blue text-white rounded text-lg items-center mx-1">Projects Worked On</div>
      <div className="p-2 bg-green text-white rounded text-lg items-center mx-1">Certificates Achived</div>
      <div className="p-2 bg-orange text-white rounded text-lg items-center mx-1">LOB/Team interested in</div>
      <div className="p-2 bg-grey text-white rounded text-lg items-center mx-1">Capacity available for PI 8</div>
      
      </div>

      <div className="w-full flex flex-wrap justify-center items-center p-4">
        {showDisruptors(loading)}
      </div>
    </div>
  );
}

export default DistruptorHome;
