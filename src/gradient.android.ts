import { Color } from "tns-core-modules/color";
import { Gradient as GradientBase, GradientDirection } from "./gradient-common";

const LINEAR_GRADIENT = 0;

export class Gradient extends GradientBase {
  private _android: any;
  private _backgroundDrawable: any;

  public createNativeView() {
    this._android = new org.nativescript.widgets.StackLayout(this._context);
    this._backgroundDrawable = new android.graphics.drawable.GradientDrawable();
    this._android.setBackgroundDrawable(this._backgroundDrawable);
    return this._android;
  }

  protected updateRadius(radius: number) {
      if (radius) {
        this._backgroundDrawable.setCornerRadius(radius);
      }
  }

  protected updateColors(colors?: Color[]): void {
    if (colors && colors.length >= 2 && this._android) {
      const _androidColors = [];
      for (let _color of colors) {
        _androidColors.push(_color.android);
      }
      this._backgroundDrawable.setGradientType(LINEAR_GRADIENT);
      this._backgroundDrawable.setColors(_androidColors);
    }
  }

  protected updateDirection(direction?: string): void {
    if (direction) {
      this._backgroundDrawable.setOrientation(Gradient.determineOrientation(direction));
    }
  }

  private static determineOrientation(direction: string): android.graphics.drawable.GradientDrawable.Orientation {
    switch (direction) {
      case GradientDirection.TO_BOTTOM:
        return android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM;
      case GradientDirection.TO_TOP:
        return android.graphics.drawable.GradientDrawable.Orientation.BOTTOM_TOP;
      case GradientDirection.TO_RIGHT:
        return android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT;
      case GradientDirection.TO_LEFT:
        return android.graphics.drawable.GradientDrawable.Orientation.RIGHT_LEFT;
      case GradientDirection.TO_BOTTOM_LEFT:
        return android.graphics.drawable.GradientDrawable.Orientation.TR_BL;
      case GradientDirection.TO_TOP_LEFT:
        return android.graphics.drawable.GradientDrawable.Orientation.BR_TL;
      case GradientDirection.TO_BOTTOM_RIGHT:
        return android.graphics.drawable.GradientDrawable.Orientation.TL_BR;
      case GradientDirection.TO_TOP_RIGHT:
        return android.graphics.drawable.GradientDrawable.Orientation.BL_TR;
      default:
        return android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM;
    }
  }
}
