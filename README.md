# NativeScript Gradient 🎨

[![Build Status][build-status]][build-url]
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![Twitter Follow][twitter-image]][twitter-url]

[build-status]:https://travis-ci.org/EddyVerbruggen/nativescript-gradient.svg?branch=master
[build-url]:https://travis-ci.org/EddyVerbruggen/nativescript-gradient
[npm-image]:http://img.shields.io/npm/v/nativescript-gradient.svg
[npm-url]:https://npmjs.org/package/nativescript-gradient
[downloads-image]:http://img.shields.io/npm/dm/nativescript-gradient.svg
[twitter-image]:https://img.shields.io/twitter/follow/eddyverbruggen.svg?style=social&label=Follow%20me
[twitter-url]:https://twitter.com/eddyverbruggen

<img src="https://github.com/EddyVerbruggen/nativescript-gradient/raw/master/screenshots/ios-full.png?v=2" height="364px" />  <img src="https://github.com/EddyVerbruggen/nativescript-gradient/raw/master/screenshots/android-full.png?v=2" height="364px" />  <img src="https://github.com/EddyVerbruggen/nativescript-gradient/raw/master/screenshots/ios-partial.png?v=2" height="364px" />  <img src="https://github.com/EddyVerbruggen/nativescript-gradient/raw/master/screenshots/android-partial.png?v=2" height="364px" />

_Those are screenshots of the [Angular](https://github.com/EddyVerbruggen/nativescript-gradient/tree/master/demo-ng) and [plain XML](https://github.com/EddyVerbruggen/nativescript-gradient/tree/master/demo) demo apps._

## Installation
```bash
tns plugin add nativescript-gradient
```

## Usage
Since we're subclassing `StackLayout`, you can add `<Gradient>` to your view at any place where you'd otherwise use a `StackLayout`.

In addition to any properties you can already set on a `StackLayout` you should add:

* `colors`: Pass a minimum number of two. Just use the `value` that you would otherwise pass to NativeScript's [`new Color("value")`](https://docs.nativescript.org/api-reference/classes/_color_.color.html). So `red`, `#FF0000`, `rgb(255, 0, 0)`, and even `rgba(255, 0, 0, 0.5)` ([transparency!](https://github.com/EddyVerbruggen/nativescript-gradient/issues/2)) will all work.
* `direction`: One of "to bottom", "to top", "to right", "to left", "to bottom left", "to top left", "to bottom right", "to top right".

### Angular
Add this to `app.module.ts` so you can use a `Gradient` tag in the view:

```typescript
import { registerElement } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);
```

These colors are also used in the screenshots above.
```html
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label class="p-20 c-white" horizontalAlignment="center" text="My gradients are the best." textWrap="true"></Label>
  <Label class="p-10 c-white" horizontalAlignment="center" text="It's true." textWrap="true"></Label>
</Gradient>
```

### Plain XML
Import the `Gradient` namespace in the `Page` tag and enjoy the colors!
```xml
<Page
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:Gradient="nativescript-gradient" loaded="pageLoaded">

  <Gradient:Gradient direction="to right" colors="#FF0077, red, #FF00FF">
    <Label text="Such a fancy gradient :)" horizontalAlignment="center"/>
  </Gradient:Gradient>
```

## Q & A
### Does this plugin use any third party libraries?
Nope, it's as light as a feather!

### What kind of element is the `Gradient` tag?
It's a `StackLayout`, so you can use all the regular `StackLayout` properties (like `orientation="horizontal"` and `borderRadius="5"`) - and you can use the `Gradient` tag in any spot where you would otherwise use a `StackLayout`.

### How many `colors` can we pass to the plugin?
Knock yourself out, but the minimum is two.
