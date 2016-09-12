//
//  RCTShadowRatioView.m
//  RatioView
//
//  Created by yinhf on 16/9/11.
//
//

#import "RCTShadowRatioView.h"

@implementation RCTShadowRatioView

static CSSSize RCTMeasure(void *context, float width, CSSMeasureMode widthMode, float height, CSSMeasureMode heightMode)
{
    RCTShadowRatioView *shadow = (__bridge RCTShadowRatioView *)context;
    CSSSize result;
    
    if (widthMode == CSSMeasureModeUndefined || width < 0 || heightMode == CSSMeasureModeExactly) {
        result.width = width > 0 ? width : 0;
        result.height = heightMode == CSSMeasureModeExactly ? height : 0;
        return result;
    }
    
    float h = width / shadow.whRatio;
    if (heightMode == CSSMeasureModeAtMost && h > height) {
        h = height;
    }
    result.width = width;
    result.height = h;
    return result;
}

- (instancetype)init
{
    if ((self = [super init])) {
        _whRatio = NAN;
        CSSNodeSetMeasureFunc(self.cssNode, RCTMeasure);
    }
    return self;
}

- (void)setWhRatio:(CGFloat)whRatio;
{
    _whRatio = whRatio;
    CSSNodeMarkDirty(self.cssNode);
}

@end
