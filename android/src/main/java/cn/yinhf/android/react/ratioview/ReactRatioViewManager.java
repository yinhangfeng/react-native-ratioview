package cn.yinhf.android.react.ratioview;

import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.views.view.ReactViewManager;

/**
 * Created by yinhf on 16/9/9.
 */
public class ReactRatioViewManager extends ReactViewManager {

    @Override
    public String getName() {
        return "RCTRatioView";
    }

    @Override
    public LayoutShadowNode createShadowNodeInstance() {
        return new ReactRatioViewShadowNode();
    }

    @Override
    public Class<? extends LayoutShadowNode> getShadowNodeClass() {
        return ReactRatioViewShadowNode.class;
    }
}
