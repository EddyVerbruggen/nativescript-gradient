import { Color } from "tns-core-modules/color";
import { Gradient as GradientBase, GradientDirection } from "./gradient-common";

export class Gradient extends GradientBase {
  private _gradientLayer: CAGradientLayer;

  constructor() {
    super();
    this._gradientLayer = CAGradientLayer.layer();
    if (this.ios) {
      this.ios.layer.insertSublayerAtIndex(this._gradientLayer, 0);
    }
  }

  public onLayout(left: number, top: number, right: number, bottom: number): void {
    super.onLayout(left, top, right, bottom);
    this._gradientLayer.frame = this.ios.layer.bounds;
  }

  protected updateColors(colors?: Color[]): void {
    if (colors && colors.length >= 2 && this.ios && this._gradientLayer) {
      const colorsArray = NSMutableArray.alloc().initWithCapacity(colors.length);
      for (let _color of colors) {
        colorsArray.addObject(_color.ios.CGColor);
      }
      this._gradientLayer.colors = colorsArray;
    }
  }

  protected updateDirection(direction?: string): void {
    if (direction && this.ios && this._gradientLayer) {
      switch (direction) {
        case GradientDirection.TO_BOTTOM:
          this._gradientLayer.startPoint = CGPointMake(0.5, 0);
          this._gradientLayer.endPoint = CGPointMake(0.5, 1);
          break;

        case GradientDirection.TO_TOP:
          this._gradientLayer.startPoint = CGPointMake(0.5, 1);
          this._gradientLayer.endPoint = CGPointMake(0.5, 0);
          break;

        case GradientDirection.TO_RIGHT:
          this._gradientLayer.startPoint = CGPointMake(0, 0.5);
          this._gradientLayer.endPoint = CGPointMake(1, 0.5);
          break;

        case GradientDirection.TO_LEFT:
          this._gradientLayer.startPoint = CGPointMake(1, 0.5);
          this._gradientLayer.endPoint = CGPointMake(0, 0.5);
          break;

        case GradientDirection.TO_BOTTOM_LEFT:
          this._gradientLayer.startPoint = CGPointMake(1, 0);
          this._gradientLayer.endPoint = CGPointMake(0, 1);
          break;

        case GradientDirection.TO_TOP_LEFT:
          this._gradientLayer.startPoint = CGPointMake(1, 1);
          this._gradientLayer.endPoint = CGPointMake(0, 0);
          break;

        case GradientDirection.TO_BOTTOM_RIGHT:
          this._gradientLayer.startPoint = CGPointMake(0, 0);
          this._gradientLayer.endPoint = CGPointMake(1, 1);
          break;

        case GradientDirection.TO_TOP_RIGHT:
          this._gradientLayer.startPoint = CGPointMake(0, 1);
          this._gradientLayer.endPoint = CGPointMake(1, 0);
          break;

        default:
          this._gradientLayer.startPoint = CGPointMake(0.5, 0);
          this._gradientLayer.endPoint = CGPointMake(0.5, 1);
          break;
      }
    }
  }
}
