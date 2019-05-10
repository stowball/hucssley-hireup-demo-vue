# Hucssley

Hucssley is very different to traditional frameworks like Bootstrap or Semantic UI, as it contains zero pre-built UI components, instead providing you with the atomic building blocks necessary for **you** to create any UI component.

It honours the groundwork laid by earlier utility class libraries such as [Tachyons](https://tachyons.io) and [Tailwind](https://tailwindcss.com), while hoping to address some of their deficiencies,

Hucssley has a few goals:

1. To be incredibly easy to learn and use, by providing a system of atomic classes that mostly map 1:1 with existing CSS properties.
2. To allow anyone of any skill to rapidly build for the web without unknowingly causing CSS bloat or fighting against some of CSS's core, but sometimes difficult to understand principals.
3. To provide the tools required to build UI for any breakpoint, user interaction or UI state.
4. To be completely platform agnostic and portable between front-end stacks, with Sass being the only dependency.
5. To be highly flexible to your needs, with the ability to easily customize existing classes and create new ones.

To understand the reasoning behind its creation, please read [Rethinking CSS](/rethinking-css.md).

---

## What's in the box?

Currently, Hucssley provides utilities for ~80 CSS properties, of which multiple, sensible default values are generated. Each utility is also created for various "modules", whether that's at certain breakpoints, UI states, user interactions, for print or more.

Each utility is completely customisable; they can be partially renamed, have values changed, have their modules altered or be omitted entirely.

Hucssley does not come with classes that don't map explicitly to specific property types (such as `box-shadow`, background gradients and `transform`s), however, tailored, custom classes for these are simple to create. Hucssley does provide utility classes for truncating text and making elements "visually hidden" for accessibilty purposes.

Hucssley also comes with:

* A sensible CSS reset to make building UI easier.
* A mobile-first, responsive mentality by forcing developers into only using abstracted `(min-width)` media queries.
* Functions for converting `px` values to `em` and `rem` for improved accessibilty.
* Functions to amend incrementally darken (`shade`) or lighten (`tint`) colours.
* The ability to theme components based off a parent selector.
* The ability to create classes scoped to custom parent selectors.
* The ability to create classes the map to pseudo-classes and pseudo-selectors.

---

## A working example

The following example demonstrates how you can use Hucssley out-of-the-box to create easily create a responsive, accessible, interactive component.

```html
<div class="
  bg-color-blue-100
  padding-500
">
  <div class="
    align-items-center
    bg-color-neutral-0
    border-color-neutral-200
    border-radius-500
    border-style-solid
    border-width-100
    display-flex
    flex-direction-column
    padding-500
    text-align-center
    bp-768--flex-direction-row
    bp-768--text-align-left
  ">
   <img
      alt=""
      class="
        bg-color-blue-600
        border-color-neutral-100
        border-radius-1000
        border-style-solid
        border-width-200
        margin-b-400
        width-50
        bp-600--width-30
        bp-768--margin-b-0
        bp-768--margin-r-500
        bp-768--width-20
      "
      src="https://hireup.cdn.prismic.io/hireup/89e15301c28e6396927d85e38e9c5d5833ebab09_kyle_357-bonnie.png"
    />
    <div>
      <p class="
        font-size-600
        font-weight-700
        line-height-200
        margin-b-400
        bp-768--font-size-800
      ">
        Disability support workers who love what you love
      </p>
      <a
        href="#"
        class="
          bg-color-blue-1000
          border-color-neutral-700
          color-neutral-0
          display-inline-block
          padding-h-400
          padding-v-300
          transition-property-all
          transition-duration-200
          transition-easing-ease
          bp-768--font-size-600
          bp-768--padding-h-500
          bp-768--padding-v-400
          hocus--bg-color-blue-600
          hocus--scale-105
      ">
        Find your connection
      </a>
    </div>
  </div>
</div>
```

---

## Installation

If you want to use Hucssley as it comes, then it's as simple as:

```scss
@import "hucssley/index";
```

However, if you want to customize Hucssley, we recommend taking this approach:

```scss
@import "hucssley/helpers";

@import "hucssley/variables/global/index";
// @import "custom/variables/global/index";

@import "hucssley/variables/classes/index";
// @import "custom/variables/classes/index";
// set class overrides before if you don't need access to the defaults & want changes to flow through referenced vars

@import "hucssley/variables/reset/index";
// @import "custom/variables/reset/index";

@import "hucssley/styles";
// @import "custom/classes/index";
```

---

## Syntax

### Modules

#### Base: `base`

Base classes in Hucssley roughly equate to a kebab-cased version of a CSS property and value:

This property:

```css
{
  align-items: flex-end;
}
```

would be available available as the following, base class:

```css
.align-items-center-flex-end
```

Some classes deviate by default though:

```css
backface -> backface-visibility
bg-color -> background-color
bg-image -> background-image
bg-position-x -> background-position-x
bg-position-y -> background-position-y
bg-repeat -> background-repeat
blend-mode -> mix-blend-mode
momentum-scrolling -> webkit-overflow-scrolling
overscroll -> overscroll-behavior
pos-[b,l,r,t] -> bottom, left, right, top
shadow -> box-shadow
svg-fill-color -> fill
svg-fill-rule -> fill-rule
svg-stroke-color -> stroke
table-border -> border-collapse
text-case -> text-transform
transition-easing -> transition-timing-function
```

If a value is a negative number, its class name output will use `-n[value]`, such as `margin-l-n100` instead of `margin-l--100`, to make it obvious that it's "negative" and to not be confused with the "modifying" syntax described below. 

If the last two words separated by a hyphen are identical, then the last word will automatically be omitted. For instance `.flex-wrap` is used instead of `flex-wrap-wrap`, but `flex-wrap-no-wrap` would be the equivalent `no-wrap` version.

*Note: If a global namespace has been configured, it will always precede the base-class name.*

#### Non-parent modules: `focus, hocus, hover, print, reduced-motion, responsive`

When you want to use class names scoped to "non-parent" modules, it follows a pattern of `[module-name][-module-variant])?--[base-class]`, for instance:

```css
.bp-768--align-items-center
.hocus--color-neutral-1000
.print--flex-direction-column
```

In the above example, `hocus` is shortcut module for `:hover, :focus`, and `bp-768` is for a `(min-width: 768px)` breakpoint.

#### State modules: `state`

State modules allow you to change the UI based on a particular state, and follows the pattern `[state-name]--[base-class]`:

```css
.is-expanded--visibility-visible
.is-disabled--opacity-30
```

For state classes to become active, you need to apply the raw state name as an class additional class on the element (often via JavaScript):

```html
<div class="
  display-none
  is-open--display-block
+ is-open
"></div>
```

#### Parent modules: `group-hover, group-state` and custom parent modules

Children of groups can respond to user and UI interaction via groups. Their syntax is `[parent-name]__[parent-type]--[base-class]`:

```
.group__hover--scale-110
.group__is-selected--bg-color-blue-300
.browser-mobile__font-size-700
```

For `group` classes to take effect, a parent has to be given the raw group class, and raw state class if applicable:

```html
<html class="browser-mobile">
  …
  <div class="
    group
+   is-selected
  ">
    <ul class="
      browser-mobile__font-size-700
      group__hover--scale-110
      group__is-selected--bg-color-blue-300
    "></ul>
  </div>
</html>
```

Be careful when using groups, because they will affect all `.group__` children. A child `.group` does not reset the actions of a parent `.group`, so you could end up with unexpected behavior.

*Note: `.browser-mobile` is an example of a custom parent selector, and not included in Hucssley by default.*

#### Combining modules: `responsive` and `group-state, state`

When a particular class is configured to use the `responsive` module, it will also output `state` and `group-state` classes should they have also been configured.

Here the syntax is `bp-[responsive-scale]-[state-name]--[base-class]` for states, and `group__bp-[responsive-scale]-[state-name]--[class-name]`:

```css
.bp-960-is-expanded--display-flex
.group__bp-1200-is-collapsed--height-0
```

## Scales

Compared with other libraries, where it makes sense, Hucssley favors a millennial scale (`0` - `1000`) to represent values instead of "names" like `xxl`, `mama-bear` etc. This can of course be completely customised.

By default, the following classes use a millennial scale:

* `bg-color`
* `border-color`
* `border-radius`
* `border-width`
* `color`
* `font-size`
* `letter-spacing`
* `line-height`
* `margin`
* `padding`
* `transition-delay`
* `transition-duration`

While others, like `opacity` and `scale` use values more relevant to your conceptual model.

## Configuration

To override the default configuration in Hucssley, you'll need to understand the basic syntax of Sass [variables](https://sass-lang.com/documentation/variables), [lists](https://sass-lang.com/documentation/values/lists) and [maps](https://sass-lang.com/documentation/values/maps).

Hucssley's configuration is split in to 3 sections: `reset`, `global` and `classes`.

* **Reset** configuration uses plain variables to customize "generic" styles like whether `box-sizing: border-box` should be used by default.
* **Global** configuration mostly uses maps to handle things like the default responsive breakpoints, colors, spacings, UI states and themes.
* **Classes** provides list and map variables to adjust the modules, and values for each class individually. Some classes (like those which deal with color) inherit from the same base variable by default, so only 1 change is required to affect all `border-color`, `background-color` and `color` classes. All classes can be generated at individual modules described above.

As detailed in the [Installation](#Installation) section, there is a preferred way of organizing any configuration overrides.

### Configuration helpers

Hucssley provides several functions that can assist you with modifying the existing configuration or configuring custom classes:

#### `hu-append` and `hu-prepend`

```scss
function hu-append($source, $target)

hu-append((a, b), (c));
// -> (a, b, c)
```

Will append the `$target` list or map to the `$source` list or map.

```scss
function hu-prepend($source, $target)

hu-prepend((a, b), (c));
// -> (c, a, b)
```

Will prepend the `$target` list or map to the `$source` list or map.

With both of the above functions, they have to be of the same type. when used with maps, they actually perform a `map-merge`, so existing keys in `$source` will also be overwritten with `$target`'s, should they exist there.

#### `hu-get`

```scss
function hu-get($map, $path);

hu-get($hu-colors, neutral 1000);
// -> #1a1a1a
```

Grabs the value at a specific path within a map.

#### `hu-em` and `hu-rem`

```scss
function hu-em($target, $context: 16)

hu-em(20px);
// -> 1.25em
```

Will convert a target to pixel value to its `em` equivalent.

```scss
function hu-rem($target, $context: 16)

hu-rem(24px);
// -> 1.5rem
```

Will convert a target to pixel value to its `rem` equivalent.

#### `hu-tint` and `hu-shade`

```scss
function hu-tint($color, $percentage) {

hu-tint(#361110, 40);
// -> #867070;
```

Will mix the specified `$color` with a `$percentage` of white.

```scss
function hu-shade($color, $percentage) {

hu-shade(#361110, 40);
// -> #200a0a;
```

Will mix the specified `$color` with a `$percentage` of black.

### Reset

Here is a list of variables and default value that are available to customise in the CSS reset:

```scss
$hu-reset-box-sizing: border-box;
$hu-reset-html-background-color: #fff;
$hu-reset-html-color: null;
$hu-reset-html-font-family: null;
$hu-reset-html-font-size: $hu-f-rem-context;
$hu-reset-html-font-smoothing: true;
$hu-reset-html-overflow-y: null;
$hu-reset-img-responsive: true;
$hu-reset-input-focus-color: null;
$hu-reset-input-placeholder-color: #767676;
```

### Global

#### Colors: `$hu-colors`

To get you started, Hucssley provides a generous palette of colours in the spectrum at multiple scales, as well as for keywords like `inherit` and `transparent`:

```scss
$hu-colors: (
  neutral: (
    0: #ffffff,
    …
    500: #898989,
    …
    1000: #1a1a1a,
  ),
  red: (
    100: #f9ecea,
    …
    500: #d9524b,
    …
    1000: #361110,
  ),
  orange: (
    100: #faefea,
    …
    500: #dc7d51,
    …
    1000: #371d11,
  ),
  yellow: (
    100: #fcfcec,
    …
    500: #e9e262,
    …
    1000: #3b3a16,
  ),
  green: (
    100: #edfbf4,
    …
    500: #7ae69a,
    …
    1000: #1c3a25,
  ),
  blue: (
    100: #ebf6fb,
    …
    500: #67bbe5,
    …
    1000: #172e3a,
  ),
  indigo: (
    100: #ede9fa,
    …
    500: #5e4be1,
    …
    1000: #141039,
  ),
  violet: (
    100: #f8eafb,
    …
    500: #cb54e3,
    …
    1000: #321239,
  ),
);
```

To customise the palette, you can either `hu-append` or `hu-prepend` other maps to complement the existing, or start fresh by re-assigning `$hu-colors` to a new map of colours entirely.

We recommend also `hu-appending` `$hu-colors-keywords` to your brand new palette to ensure you can use classes like `bg-color-transparent` and `color-inherit`;

Here is an example of setting a completely new palette:

```scss
$hu-colors: hu-append((
  neutral: (
    0: #fff,
    100: #fafbfd,
    200: #f9fafc,
    300: #f1f4f8,
    400: #f1f1f1,
    500: #e0e1e2,
    600: #aeaeae,
    700: #888,
    800: #626262,
    900: #495b60,
    1000: #140a01,
  ),
  blue: (
    100: #f3f9ff,
    300: #cff5fa,
    400: #afeff7,
    600: #00c2da,
    1000: #003453,
  ),
  yellow: (
    200: #fdf8c2,
    300: #fbf5ac,
  ),
  green: (
    1000: #17653b,
  ),
  red: (
    100: #fffdfc,
    1000: #b40b00,
  ),
), $hu-colors-keywords);
```

#### Responsive breakpoints: `$hu-breakpoints`

Out-of-the-box, Hucssley provides the following 7 breakpoint values, with all being output for every `responsive` class name. It can be modified or replaced entirely to suit your project.

```scss
$hu-breakpoints: (
  360: hu-em(360),
  480: hu-em(480),
  600: hu-em(600),
  768: hu-em(768),
  960: hu-em(960),
  1024: hu-em(1024),
  1280: hu-em(1280),
);
```

#### UI states: `$hu-states`

Out-of-the-box, Hucssley provides the following 10 breakpoint values, with all being output for every `state` and `group-state` class name. It can be modified or replaced entirely to suit your project.


```scss
$hu-states: (
  is-active,
  is-closed,
  is-collapsed,
  is-disabled,
  is-expanded,
  is-hidden,
  is-loading,
  is-open,
  is-selected,
  is-visible,
);
```

#### Spacings: `$hu-spacing-modules` and `$hu-spacing-scale`

By default, `margin` and `padding` classes are generated for the following modules: `base, responsive`:

```
$hu-spacing-modules: (base, responsive) !default;
```

And from the spacing scale defined in `$hu-spacing-scale`.

```scss
$hu-spacing-scale: (
  0: 0,
  100: hu-rem(2),
  200: hu-rem(4),
  300: hu-rem(8),
  400: hu-rem(16),
  500: hu-rem(24),
  600: hu-rem(32),
  700: hu-rem(48),
  800: hu-rem(64),
  auto: auto,
);
```

You can easily amend or override any of these values to suit your project.

#### Borders: `$hu-border-modules`, `$hu-border-sides` and `$hu-border-types`

By default, `.border-color-`, `.border-style-` and `.border-width-` classes use the 2 or 3 of the global border variables to control which modules, sides and colors they're output at.

```scss
$hu-border-modules: (base);

$hu-border-sides: (
  border: border,
  border-b: border-bottom,
  border-l: border-left,
  border-r: border-right,
  border-t: border-top,
  border-h: (border-left, border-right),
  border-v: (border-bottom, border-top),
);

$hu-border-types: $hu-colors;
```

In conjunction with variables specific to each class name, a lot of classes like are generated:

```css
.border-color-neutral-0
.border-v-color-blue-600
.border-b-style-none
.border-h-width-200
```

#### Themes: `$hu-themes`

As well as the standard `$hu-colors`, "color" classes can also be generated for theming your application based on the key/vaue pairs in this map.

By default, no themes are provided, but making your own is easy:

```scss
$hu-themes: (
  broncos: (
    primary: #6c1d45,
    secondary: #9e2b64,
    highlight: #f8cc0d,
  ),
  knights: (
    primary: #003b73,
    secondary: #1d54a6,
    highlight: #e82c2a,
  ),
  sharks: (
    primary: #1f7eb2,
    secondary: #27a3e6,
    highlight: #95d1f2,
  ),
);
```

This would allow you to theme your entire application simply by changing a single, parent level `theme-[theme-name]` class by utilizing all the generated classes, like:

```css
.theme-broncos .theme__bg-color-primary {
  background-color: #6c1d45;
}

.theme-knights .theme__color-highlight {
  color: #e82c2a;
}

.theme-sharks .theme__border-color-secondary {
  border-color: #27a3e6;
}
```

#### Namespace: `$hu-namespace`

As mentioned earlier, Hucssley provides you the opportunity to namespace the class names generated, to help ensure there's no conflict or pollution with other possible frameworks.

```scss
$hu-namespace: `ibm-`;

// -> .ibm-align-content-center, .bp-480--ibm-flex-direction-column, .group__is-open--ibm--display-flex
```

### Classes

Each class in Hucssley can be completely customized to individually change the properties, values and modules used.

**For details of all the classes provided by default and their configuration, please read [Hucssley classes](/hucssley-classes.md).**

---

## Creating custom classes

### Helper Functions

#### `hu-format-modules`

```scss
function hu-format-modules($list-of-modules)

hu-format-modules((state, print, responsive, state, base));
// -> (base, state, print, responsive)
```

When creating custom classes, this function removes duplicates and re-orders the list in to the correct specificity order.

**TBC**