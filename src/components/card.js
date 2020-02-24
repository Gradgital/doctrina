import React from 'react';



function Card({match,data}) {
  return (
      <div className="w-64 rounded bg-white border-black shadow m-1">
          
          <img className="w-64" src="{data.img}" alt="profile"></img>
          
          {match.params.id}
      </div>
  );
}

export default Card;
