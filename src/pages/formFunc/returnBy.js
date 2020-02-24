// var obj = JSON.stringify({name:"rawk",surname:"mbankeu"});
// var objName = "reactTest";
// var query = `query   setObject($obj: String, $objName: String){
//   setObject(object: $obj ,objectName: $objName)
// }`;


const returnBy = async (e, eObj, eFindBy) => {
    var objFields = e
    var objName = eObj;
    var findBy = eFindBy;
    let newData = "";
  
    var query = `query   getParamObject($objFields: [String], $objName: String, $findBy: String){
    getParamObject(objectFields: $objFields ,objectName: $objName, findBy: $findBy)
  }`;
  
  
  
       await fetch("https://parseapi.azurewebsites.net/object", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        query,
        variables: { objFields, objName,findBy },
      }),
    })
      .then(r => r.json())
      .then(data => newData = data)
  
  return newData
  
  };
  
  export default returnBy;
  



 