'use client'
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
class StoreLocator extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '400px',
      position: 'relative'
    };

    return (
      <div className="container mx-auto px-4 py-3 h-[90vh] w-[100vw]  flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold mb-4">Store Locator</h1>
        <iframe width="520" height="400" frameborder="0"  scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Rajpura+(westside)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://dissertation-writingservice.com/'>Go To Store</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=aecd3ebda041ca4e45da6899589d3f269c70203a'></script>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
})(StoreLocator);
