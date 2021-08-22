import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NotFound from './components/NotFound/NotFound';
import ImagePage from './components/ImagePage/ImagePage';
import LinksPage from './components/LinksPage/LinksPage';
import { fetchImages } from './actions/imageAction/imageAction';
import Axios from 'axios';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={ImagePage} />
          <Route path="/ImagePage" component={ImagePage} />
          <Route path="/LinksPage" component={LinksPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }

  componentWillMount() {
    Axios.get('/ping')
      .then(res => {
        console.log('res', res)
      })
  }

  //if want to make api calls when app is opened
  // componentDidMount() {
  //   this.props.getImages('https://unsplash.it/list');
  // }
}

function mapDispatchToProps(dispatch) {
  return {
    getImages: (url) => dispatch(fetchImages(url))
  }
}



export default connect(null, mapDispatchToProps)(App);

