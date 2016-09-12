//
//  RCTRatioViewManager.m
//  RatioView
//
//  Created by yinhf on 16/9/11.
//
//

#import "RCTRatioViewManager.h"
#import "RCTBridge.h"
#import "RCTShadowRatioView.h"

@implementation RCTRatioViewManager

RCT_EXPORT_MODULE()

- (RCTShadowRatioView *)shadowView
{
    return [RCTShadowRatioView new];
}

RCT_EXPORT_SHADOW_PROPERTY(whRatio, CGFloat)

@end
