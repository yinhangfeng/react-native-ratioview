'use strict';

import React, {
  Component,
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import RatioView from 'react-native-ratioview';

class Example extends Component {

  _renderRatioView(ratio, text) {
    return (
      <RatioView
        whRatio={ratio}
        style={styles.ratioView}>
        <View style={styles.ratioInner}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </RatioView>
    );
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        {this._renderRatioView(1, '1:1')}
        {this._renderRatioView(2, '2:1')}
        {this._renderRatioView(16 / 9, '16:9')}
        <RatioView whRatio={456 / 239}>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
        </RatioView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    paddingTop: 20,
    paddingLeft: 120,
    paddingRight: 120,
  },
  ratioView: {
    backgroundColor: '#2196f3',
    marginBottom: 20,
  },
  ratioInner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#FFF',
  },
});

AppRegistry.registerComponent('Example', () => Example);
