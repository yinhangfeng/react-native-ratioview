package cn.yinhf.android.react.ratioview;

import android.util.Log;

import com.facebook.csslayout.CSSConstants;
import com.facebook.csslayout.CSSMeasureMode;
import com.facebook.csslayout.CSSNodeAPI;
import com.facebook.csslayout.MeasureOutput;
import com.facebook.react.uimanager.LayoutShadowNode;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by yinhf on 16/9/9.
 */
public class ReactRatioViewShadowNode extends LayoutShadowNode implements CSSNodeAPI.MeasureFunction {
    private static final String TAG = "ReactRatioViewShadowNode";

    private float whRatio = CSSConstants.UNDEFINED;

    @Override
    public void measure(CSSNodeAPI node, float width, CSSMeasureMode widthMode, float height, CSSMeasureMode heightMode, MeasureOutput measureOutput) {
        if (widthMode == CSSMeasureMode.UNDEFINED || width < 0 || heightMode == CSSMeasureMode.EXACTLY) {
            measureOutput.width = width > 0 ? width : 0;
            measureOutput.height = heightMode == CSSMeasureMode.EXACTLY ? height : 0;
            //Log.w(TAG, "measure: can not measure whRatio with width:" + width + " height:" + height + " widthMode:" + widthMode + " heightMode:" + heightMode);
            return;
        }
        float h = width / whRatio;
        if (heightMode == CSSMeasureMode.AT_MOST && h > height) {
            h = height;
            //Log.w(TAG, "measure: not enough height space width:" + width + " height:" + height + " widthMode:" + widthMode + " heightMode:" + heightMode);
        }
        measureOutput.width = width;
        measureOutput.height = h;
    }

    @ReactProp(name = "whRatio", defaultFloat = CSSConstants.UNDEFINED)
    public void setWhRatio(float whRatio) {
        if (this.whRatio != whRatio) {
            this.whRatio = whRatio;
            setMeasureFunction(whRatio > 0 ? this : null);
            dirty();
        }
    }

    @Override
    public void reset() {
        super.reset();
        whRatio = CSSConstants.UNDEFINED;
        setMeasureFunction(null);
    }
}
