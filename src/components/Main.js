import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from './navbar';
import Layout from './layout';
import Card from './card';
import Home from '../pages/home';
import Review from '../pages/reviews/reviewhome';
import AddProfile from '../pages/profile/addProfile';
import ReturnReviews from '../pages/reviews/returnReviews';
import GenerateReviewUrl from '../pages/profile/generateReview';
import ProfileCard from '../pages/profile/viewProfile';


function Main() {
  return (
      <BrowserRouter>
      <NavBar/>
      <Layout>
          <Route exact path="/" component={Home}/>
          <Route  path="/skills/:id" component={Card}/>
          <Route  path="/profle" component={Card}/>
          <Route  path="/review/:id" component={ReturnReviews}/>
          <Route  path="/generateReview" component={GenerateReviewUrl}/>
          <Route  path="/$2y$12$wm7HfGd3eh1M.vY7o/xFu.TWJ7QOm7p.mwAZReq910H1K50hS4MXm" component={AddProfile}/>
          <Route  path="/addProfile" component={AddProfile}/>
          <Route  path="/submitReviews/:id" component={Review}/>
          <Route  path="/viewProfile" component={ProfileCard}/>
      </Layout>
      </BrowserRouter>
  );
}

export default Main;


// this.props.match.params.id