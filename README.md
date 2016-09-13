# react-native-ratioview [![npm version](https://badge.fury.io/js/react-native-ratioview.svg)](https://badge.fury.io/js/react-native-ratioview)

![](https://github.com/yinhangfeng/react-native-ratioview/blob/master/images/image.png?raw=true)

# Install
1. `npm i react-native-ratioview --save`
2. `react-native link react-native-ratioview`

### Manual install
#### Android
1. `npm i react-native-ratioview --save`
2. Open up `android/app/src/main/java/[...]/MainApplication.java
Add `new ReactRatioViewPackage()` to the list returned by the `getPackages()` method

3. Append the following lines to `android/settings.gradle`:

  ```
  include ':react-native-ratioview'
  project(':react-native-ratioview').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-ratioview/android')
  ```

4. Insert the following lines inside the dependencies block in `android/app/build.gradle`:

	```
  compile project(':react-native-ratioview')
	```

#### iOS
1. `npm i react-native-ratioview --save`
2. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
3. Go to `node_modules` ➜ `react-native-ratioview` and add `RatioView.xcodeproj`
4. In XCode, in the project navigator, select your project. Add `libRatioView.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
5. Click `RatioView.xcodeproj` in the project navigator and go the `Build Settings` tab. Make sure 'All' is toggled on (instead of 'Basic'). In the `Search Paths` section, look for `Header Search Paths` and make sure it contains both `$(SRCROOT)/../../react-native/React` and `$(SRCROOT)/../../../React` - mark both as `recursive`.
5. Run your project (`Cmd+R`)


# Usage
```
<RatioView whRatio={1200 / 630}>
  <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
</RatioView>
```
