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

const TEST_RATIOS = [
  1,
  2,
  0.5,
  -1,
  0,
  null,
];

const TEST_RATIOS_TEXT = [
  '1:1',
  '2:1',
  '1:2',
  '-1',
  '0',
  'null',
];

class Example extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      whRatio: 1,
      whRatioText: '1:1',
    };
  }

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
        <TouchableOpacity onPress={() => {
          let i = (Math.random() * TEST_RATIOS.length) << 0;
          this.setState({
            whRatio: TEST_RATIOS[i],
            whRatioText: TEST_RATIOS_TEXT[i],
          });
        }}>{this._renderRatioView(this.state.whRatio, this.state.whRatioText)}</TouchableOpacity>
        {this._renderRatioView(2, '2:1')}
        {this._renderRatioView(16 / 9, '16:9')}
        <Text>Image whRatio</Text>
        <RatioView whRatio={1200 / 630}>
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
    marginTop: 10,
    marginBottom: 10,
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
