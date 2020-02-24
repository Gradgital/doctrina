// var obj = JSON.stringify({name:"rawk",surname:"mbankeu"});
// var objName = "reactTest";
// var query = `query   setObject($obj: String, $objName: String){
//   setObject(object: $obj ,objectName: $objName)
// }`;


const submit = (e, eObj) => {
  var obj = JSON.stringify(e);
  var objName = eObj;

  var query = `query   setObject($obj: String, $objName: String){
  setObject(object: $obj ,objectName: $objName)
}`;

  fetch("https://parseapi.azurewebsites.net/object", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    body: JSON.stringify({
      query,
      variables: { obj, objName },
    }),
  })
    .then(r => r.json())
    .then(data => console.log("data returned:", data));
};

export default submit;
