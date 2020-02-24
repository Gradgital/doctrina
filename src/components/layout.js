import React from 'react';



function Layout(props) {
  return (
    <div className="w-full">
        {props.children}
    </div>
  );
}

export default Layout;
