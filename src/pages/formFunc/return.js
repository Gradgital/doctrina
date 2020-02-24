// var obj = JSON.stringify({name:"rawk",surname:"mbankeu"});
// var objName = "reactTest";
// var query = `query   setObject($obj: String, $objName: String){
//   setObject(object: $obj ,objectName: $objName)
// }`;


const returnData = async (e, eObj) => {
  var objFields = e
  var objName = eObj;
  let newData = "";

  var query = `query   getObject($objFields: [String], $objName: String){
  getObject(objectFields: $objFields ,objectName: $objName)
}`;



     await fetch("https://parseapi.azurewebsites.net/object", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify({
      query,
      variables: { objFields, objName },
    }),
  })
    .then(r => r.json())
    .then(data => newData = data)

return newData

};

export default returnData;
