// Settings.js

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
var self;
export default class Settings extends Component {
  constructor(props) {
    super(props);
    self=this;
  }

  render() {
    const { navigation } = self.props;
    console.log("TCL: Settings -> render -> navigation", navigation.getParam('uri'))
    return (
      <View style={{}}>
        <View style={{}}>
              <Image style={{width: 135, height: 180, borderRadius:10}} source={navigation.getParam('uri')}  />
            </View>
      </View>
    )
  }
};
