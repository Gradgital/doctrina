import Parse from './config';


const Review = Parse.Object.extend("DoctrinaReview");
const review = new Review();

const setReview = (e) => {

  review.save({e}).then((review) =>{
    console.log('New object created with objectId: ' + review.id);
  },(error) => {
    alert('Failed to create new object, with error code: ' + error.message);
  }).catch(e => console.log(e));
}


export default setReview;