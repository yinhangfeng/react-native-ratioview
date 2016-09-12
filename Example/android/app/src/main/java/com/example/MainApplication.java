package com.example;

import android.app.Application;
import android.util.Log;

import com.facebook.csslayout.CSSConstants;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import cn.yinhf.android.react.ratioview.ReactRatioViewPackage;

public class MainApplication extends Application implements ReactApplication {

  @Override
  public void onCreate() {
    super.onCreate();

    Log.i("xxxx", "onCreate: " + (CSSConstants.UNDEFINED == CSSConstants.UNDEFINED) + " " + (CSSConstants.UNDEFINED < 0) + " " + (CSSConstants.UNDEFINED > 0));
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ReactRatioViewPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
