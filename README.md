# NativeScript Gradient

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

<img src="https://github.com/EddyVerbruggen/nativescript-gradient/raw/master/screenshots/ios-full.png" height="500px" />
<img src="https://github.com/EddyVerbruggen/nativescript-gradient/raw/master/screenshots/ios-partial.png" height="500px" />
<img src="https://github.com/EddyVerbruggen/nativescript-gradient/raw/master/screenshots/android-full.png" height="500px" />
<img src="https://github.com/EddyVerbruggen/nativescript-gradient/raw/master/screenshots/android-partial.png" height="500px" />

_Those are screenshots of the [Angular demo app](https://github.com/EddyVerbruggen/nativescript-gradient/tree/master/demo-ng). We also have an [XML demo app](https://github.com/EddyVerbruggen/nativescript-gradient/tree/master/demo)._

## Installation
```bash
tns plugin add nativescript-gradient
```

## Usage
Add a `<Gradient>` tag to your view in any place where you'd otherwise use a `StackLayout`
(we've subclassed `StackLayout`, that's why).

In addition to any properties you can already set on a `StackLayout` you should add:

* `colors`: Pass a minimum number of two. Just use the `value` that you would otherwise pass to NativeScript's `new Color("value")`.
* `direction`: One of "to bottom", "to top", "to right", "to left", "to bottom left", "to top left", "to bottom right", "to top right".

### Angular
Add this to `app.module.ts` so you can use `Gradient` as a tag in the view:

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
These colors are also used in the screenshots above.
```xml
<Page
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:Gradient="nativescript-gradient" loaded="pageLoaded">

  <Gradient:Gradient direction="to right" colors="#FF0077, red, #FF00FF">
    <Label text="Such a fancy gradient :)" horizontalAlignment="center"/>
  </Gradient:Gradient>
```

## Q & A
#### Does this plugin use third party libraries as a dependency?
Nope.

#### What kind of element is the `Gradient` tag?
It's a `StackLayout`, so you can use all normal `StackLayout` properties (like `orientation="horizontal"`) on this element as well, and you can use the `Gradient` tag in any spot where you would otherwise use a `StackLayout`.

#### How many color can we pass to the plugin?
Knock yourself out, but the minimum is two.