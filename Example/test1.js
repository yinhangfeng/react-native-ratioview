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
  TouchableOpacity,
} from 'react-native';
import RatioView from 'react-native-ratioview';

class Example extends Component {

  constructor(props, context) {
    super(props, context);
  }

  _renderRatioView(ratio, style, text) {
    return (
      <RatioView
        whRatio={ratio}
        style={style}>
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
        {this._renderRatioView(1, null, '1:1')}
        {this._renderRatioView(1, {
          width: 100,
        }, '1:1')}
        {this._renderRatioView(1, {
          height: 100,
        }, '1:1')}
        {this._renderRatioView(null, {
          height: 100,
        }, '1:1')}
        <ScrollView
          style={{
            height: 300,
          }}>
          {this._renderRatioView(1, {
            width: 100,
          }, '1:1')}
          {this._renderRatioView(1, {
            height: 100,
          }, '1:1')}
          {this._renderRatioView(null, {
            height: 100,
          }, '1:1')}
          {this._renderRatioView(1, {
            width: 100,
            alignSelf: 'center',
          }, '1:1')}
        </ScrollView>
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
  },
  ratioView: {
    backgroundColor: '#2196f3',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
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
