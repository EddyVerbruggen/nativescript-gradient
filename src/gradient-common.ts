import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { Color } from "tns-core-modules/color";
import { Property } from "tns-core-modules/ui/core/view";

const directionProperty = new Property<Gradient, string>({
  name: "direction",
  defaultValue: "to bottom"
});

const colorsProperty = new Property<Gradient, string>({
  name: "colors"
});

export abstract class Gradient extends StackLayout {

  [directionProperty.setNative](value?: string) {
    if (value) {
      const sanitizedValue = value.toLowerCase().trim();
      if (Gradient.isValidDirection(sanitizedValue)) {
        this.updateDirection(sanitizedValue);
      }
    }
  }

  [colorsProperty.setNative](value?: string) {
    if (value) {
      const _colors: Color[] = [];
      // split color codes separated with a comma. Skip commas within parenthesis -> rgba(255,0,0,1) is a color code
      const _colorsCodes = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      for (let _colorCode of _colorsCodes) {
        if (Color.isValid(_colorCode.trim())) {
          _colors.push(new Color(_colorCode.trim()));
        }
      }
      this.updateColors(_colors);
    }
  }

  private static isValidDirection(value: string): boolean {
    return GradientDirection.TO_BOTTOM === value
        || GradientDirection.TO_TOP === value
        || GradientDirection.TO_LEFT === value
        || GradientDirection.TO_RIGHT === value
        || GradientDirection.TO_BOTTOM_LEFT === value
        || GradientDirection.TO_TOP_LEFT === value
        || GradientDirection.TO_BOTTOM_RIGHT === value
        || GradientDirection.TO_TOP_RIGHT === value;
  }

  protected abstract updateColors(colors: Color[]);

  protected abstract updateDirection(direction: string);
}

directionProperty.register(Gradient);
colorsProperty.register(Gradient);

export namespace GradientDirection {
  export const TO_BOTTOM = "to bottom";
  export const TO_TOP = "to top";
  export const TO_RIGHT = "to right";
  export const TO_LEFT = "to left";
  export const TO_BOTTOM_LEFT = "to bottom left";
  export const TO_TOP_LEFT = "to top left";
  export const TO_BOTTOM_RIGHT = "to bottom right";
  export const TO_TOP_RIGHT = "to top right";
}
