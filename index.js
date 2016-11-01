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
    let ratioView;
    let children = this.props.children;
    if (this.props.whRatio > 0) {
      ratioView = (
        <RCTRatioView
          whRatio={this.props.whRatio}/>
      );
      children = children && React.cloneElement(
        React.Children.only(children),
        {
          style: [children.props.style, StyleSheet.absoluteFill],
        }
      );
    }

    return (
      <View
        {...this.props}>
        {ratioView}
        {children}
      </View>
    );
  }
}

const RCTRatioView = requireNativeComponent('RCTRatioView', RatioView, {
  nativeOnly: {
    nativeBackgroundAndroid: true,
    nativeForegroundAndroid: true,
  }
});
