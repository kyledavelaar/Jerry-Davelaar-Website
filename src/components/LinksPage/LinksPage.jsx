import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../Navbar/Navbar';
import { fetchImages } from '../../actions/imageAction/imageAction';
import ImageLinks from '../ImageLinks/ImageLinks';

class LinksPage extends Component {
  render() {
    
    return (
      <div>
        <Navbar />
        <ImageLinks 
          images={this.props.images} 
          hasError={this.props.hasErrored}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
  
  componentDidMount() {
    if (this.props.images.length === 0) {
      this.props.getImages('https://unsplash.it/list/');
    }
  }
}

function mapStateToProps(state) {
  return {
    // comes from api call above for getImages
    images: state.images,
    hasErrored: state.imageFetchError,
    isLoading: state.imagesLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getImages: (url) => dispatch(fetchImages(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LinksPage);
