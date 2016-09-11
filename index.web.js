'use strict';

import React, {
  Component,
  PropTypes,
} from 'react';
import ReactNative, {
  View,
  StyleSheet,
  requireNativeComponent,
} from 'react-native';

export default class RatioView extends Component {

  static propTypes = {
    ...View.propTypes,
    whRatio: PropTypes.number,
  };

  render() {
    let children = this.props.children;
    return (
      <View
        {...this.props}>
        <RCTRatioView
          whRatio={this.props.whRatio}/>
        {children && React.cloneElement(
          React.Children.only(children),
          {
            style: [children.props.style, StyleSheet.absoluteFill],
          }
        )}
      </View>
    );
  }
}

const RCTRatioView = requireNativeComponent('RCTRatioView', RatioView);
