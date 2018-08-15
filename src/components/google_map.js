import React, { Component } from 'react'

class GoogleMap extends Component {
  map = React.createRef()

  componentDidMount() {
    const { lat, lon } = this.props

    new google.maps.Map(this.map.current, {
      center: {lat: lat, lng: lon},
      zoom: 12
    })
  }

  render () {
    return <div ref={this.map} />
  }
}

export default GoogleMap
