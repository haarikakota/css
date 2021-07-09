# CSS 

## Selectors with Combinators
#### Adjacent Sibling
```css
 h2 + p {}
```
  * Elements share the same parent
  * Second element comes immediately after first element

#### General Sibling
```css
h2 ~ p {}
```
  * Element share the same parent
  * Second element comes after first element
  
#### Child
```css
div > p {}
```  
  * Second element is adircet child of first element.
  
#### Descendant
```css
div p {}
```
  * Second element is a descendant of the first element.
  
#### Shorthand Properties
  * Combine values of multiple properties in a single property.
  * Separate Properties
```css
{
    border-width: 2px;
    border-style : solid;
    border-color : orange;
}
```
```css
{
    margin-top: 5px;
    margin-right: 10px;
    margin-bottom: 5px;
    margin-left: 10px;
}
```

#### Shorthand Property
```css
{
    border : 2px solid orange;
}
```
```css
{
    margin : 5px 10px;
}
```

## Selectors

| Class | ID    |
|-----|----------|
| .some-class{..}  | #some-id{..} |
| Re-usable  | Only used once per page |
| Allows to mark and name things for styling purposes only | Got non-CSS meaning
| Most used selector type | Use if available anyways

Don't use !important, which overwrites specifity and all other selectors.

## Positioning

* The "Position" Property
  * static (default)
  * fixed
  * absolute
  * relative
  * sticky

* The "Document Flow"
  * The default positioning behaviour of html elements can be changed with position.
  * Elements can remain in the document flow or be excluded from it.

* Moving Elements
  * top bottom left right
  
* Positioning Context
  * Defines the anchor point for your position change.
  * The viewport for fixed.
  * Another element for absolute
  * The element itself for relative
  * The viewport and another element for sticky.

* Stacking Context
  * Created when applying fixed/static or absolute/relative in combination with z-index.
  * Defines stocking behaviour of child elements.

* Z-Index
  * Changes the default element positioning along the z-axis.
  * auto (0) as default value.
  * Changes only possible when position is applied.
  * Larger value = elemet is positioned on top of other elements.

## Background Images 
* The "Background" Property
  * background-image
  * background-color
  * background-position
  * background-origin
  * background-clip
  * background-repeat
  * background-attachment
  
* The "background" shorthand
  * Watch out for background-position and background-size(center/cover)
  * As all shorthands: Overwrites other properties
  
* Gradients
  * Linear and radial gradients
  * Linear Gradients : Direction + color stops
  * Radial Gradients : shape, size, position and color stops
  
* Multiple Backgrounds
  * You can stack background images (only one solid color which has to be at the bottom)
  * Using transparency can create cool effects.
  
* image Vs background-image
  * <img> is better for accessibility but way more difficult to style.
  * background-image can be sized and positioned easier.
  
* Filters
  * Easily add visual effects to boxes.
  * Affect all content

## Sizes and Units

* Units

    |      |      |
    |------|------| 
    | pixels      | px |
    | percentages | %|
    | root em      | rem       |
    | em   | em        |
    | viewport height   | vh        |
    | viewport width   | vw        |
  * Questions arise here are?
    * Whcih properties can I use in connection with these units?
      * The properties which can be used are:
        * font-size, padding, border, margin, width, height, top, bottom, left, right.
      ![css border-box](https://codesource.io/wp-content/uploads/2020/09/box-sizing.png "image Title")

    * How is the size calculated?
      * Absolute Lengths
        * Mostly ignore user settings
        * px, cm, mm ..
      * Viewport Lengths
        * Adjust to current viewport
        * vh, vw, vmin, vmax..
      * Font-relative Lengths
        * Adjust to default font-size
        * rem, em
      * % is a special case
        * 3 Rules to remember
          * position: fixed; element -> viewport
          * position: absolute | relative | fixed | sticky; element -> content + padding 
          * position: static | relative; element -> content
    * What's the right unit to choose?
      ![Units](./Basics%20of%20CSS/images/units.png)

  * The Containing Block
    * The reference point when applying % units to an element.
    * Depends on the position property applied to this element.
    * Can be the closest ancestor or the viewport.

  * 100% Height
    * The element itself and the ancestors use position static/relative => 100% height is not working.
    * Adding 100% height to all ancestors fixes this issue.
    * Position fixed/absolute or using viewport units(vw or vh) as alternatives.
  * Min/Max-Width
    * Always use these in combination with the width property.
    * Set width to a relative value(%) and min/max value to px to limit the element size, also available for height.
  * EM & Rem
    * Sizes always depend on the font-size of the root element(rem) or the element itself(em), not restricted to font-size.

## Working with JS & CSS
* Accessing Style Properties
  * Access CSS styles on DOM elements via the style property.
  * Access via camelCase notation (e.g. backgroundImage) or by using strings (e.g. 'background-image').
* Add & Remove CSS Classes
  * Use className or classList.
  * classList is easier and more flexible.

### Tools we have to make our website responsive
* Viewport
  * Adjust site to device viewport.
  * No design changes
* Media Queries
  * Change design depending on size.
  * Design changes defined by us.

## Adding & Styling Forms
* Styling Inputs
  * Input elements tend to have many browser default styles
  * Use pseudo-selectors(:focus) to provide good user feedback
  * outline vs border
* Validation Feedback
  * :valid and :invalid pseudo selectors
  * Manual validation feedback via class addition(e.g. invalid).

## Texts and Fonts

* Generic & Font Families
  * Generic families as fallback in case font family is not available.
  * Define exact font by using a specific font family.
* Using & importing Font Families
  * Font families must be available to be displayed correctly on the browser.
  * Locally installed font families Vs embedded font-families with @font-face
  * Import font families from google fonts.
* Font Properties
  * font-size, font-style, font-weight, font-stretch, font-variant
  * letter-spacing, white-space, line-height, text-decoration, text-shadow
* font-display
  * Define the font family loading behaviour to ensure fonts are immediately visible for the user.
  * Available values mainly differentiate in block-period and swap-period
* Font Shorthand
  * Apply font family according to available system fonts.
  * Shorthandfor multiple properties.
  * font-size and font-family are obligatory.
  
## Flexbox
   ![Flexbox](./Basics%20of%20CSS/images/flexbox.png)
   ![Main Axis Vs Cross Axis](./Basics%20of%20CSS/images/main-cross.png)
    ![Main Axis Vs Cross Axis](./Basics%20of%20CSS/images/align-flex.png)

  * Flexbox
    * Changes the way elements are displayed on a website.
    * Flexbox consists of the Flex-Conatiner and Flex-Items
  * Flex Container
    * Adding display:flex to an element will turn it into a Flex-Conatiner
  * Flex Container - Properties
    ```css
    display: (inline)-flex;
    flex-direction : column;
    flex-wrap: no-wrap;
    flex-flow: (shorthand direction and wrap);
    align-items: center;
    justify-content: center;
    align-content: cenetr;
    ```
  * Main Axis Vs Cross Axis
    * flex-direction defines main-axis
    * Properties refer to main and cross axis
    * Behaviour of flex-items changes depending on flex-direction.
  * Flex Items
    * All elements/children of the flex-container will become flex-items.
    * Behaviour can be changed by properties applied to the flex-container and applied to individual flex-items.
  * Flex Items - Properties 
    ```css
      order
      align-self
      flex-grow
      flex-shrink
      flex-basics
      flex (shorthand)
    ```

## CSS Grid
  * Creating a grid
    * display : grid creates a grid where child elements are automatically placed in rows.
    * This default can be overwritten with grid-auto-flow (and then also grid-auto-rows or grid-auto-columns)
    * Use grid-gap to add gaps between columns and rows.
  * Defining the Grid Structure
    * You define columns and/or rows explictly via grid-template-columns/grid-template-rows.
    * Use repeat(times, size) to create multiple columns and rows with ease.
    * Use auto-fill/auto-fit to derive the number of columns automatically.
    * Use minmax for dynamic sizing.
  * Placing Elements
    * Position elements in the grid via grid-row and/or grid-column.
    * Use span X to span an element over multiple columns or rows.
    * Use line numbers, line names or named areas.
  * Aligning Elements
    * Align grid items via justify-items (X-axis) and align-items (Y-axis)
    * Align the entire grid content via justify-content (X-axis) and align-content (Y-axis).
  * Grid container
    * Defines the element as a grid container and establishes a new grid formatting context for its contents.
  * Grid Container - properties
    * grid - generates a block-level grid
    * inline-grid - generates an inline-level grid.
    * grid-template-columns
    * grid-template-rows
      * Defines the columns and rows of the grid with a space-separated list of values. 
      * The values represent the track size, and the space between them represents the grid line.
  * Grid Items
    * grid-column-start
    * grid-column-end
    * grid-row-start
    * grid-row-end
      * Determines the grid items location within the grid by referring to specific grid lines. 
      * grid-column-start/grid-row-start is the line where the item begins.
      * grid-column-end/grid-row-end is the line where the item ends. 

## CSS Transforms
* The "transform" property
  * Allows you to translate(), scale(), rotate() and skew() elements.
  * 3D transformations are possible via the Z-axis.
  * transform-origin and transform-style for customization.
* Perspective
  * perspective allows you to define the perspective of the viewer.
  * perspective-origin allows you to manipulate the origin of the viewer.

## Transitions and Animations
* Keyframes
  * Define all animation steps on your own: Via from and to or % values.
  * Animate as many properties as you want.
  * Animate different properties in each keyframe step.
  * Timing function interpolates transition between keyframes.
* The "animation" property
  * Define which keyframe set should be played
  * Set a duration and delay (if wanted)
  * Define how many iterations should be played and if the animation should alternate or not.
  * Set the animation-fill-mode to decide whether the properties of the last keyframe should be kept.
  * Listen to animation events via JavaScript.

## Proof CSS Code
  ![CSS Variables](./Basics%20of%20CSS/images/css-variables.png)
  * Vendor Prefixes
    * Browsers implement new features differently and at different speed.
    ```css
    .container{
      display : -webkit-box;
      display : -ms-flexbox;
      display : -webkit-flex;
      display : flex;
    }
    ```
  * Support Queries
    ```css
    @supports (display : grid) {
      .container{
        display : grid;
      }
    }
    ```
  * Polyfills
    * A polyfill is a JavaScript Package which enables certain CSS features in browsers which would not support it otherwise.

    > Polyfills come at a cost! The JavaScript has to be loaded and Parsed.
  
    ![Eliminate Cross-Browser Inconsistencies](./Basics%20of%20CSS/images/cross-browser-inconsistency.png)

     ![Choosing Class Names Correctly](./Basics%20of%20CSS/images/classNames.png)

      ![BEM](./Basics%20of%20CSS/images/block-element.png)

  * CSS Variables
    * --your-name : 1rem;
    * Define values once, use them multiple times.
    * Only supported in modern browsers.
  * Naming CSS Classes
    * Use kebab-case(e.g: page-title) and name classes by feature not by style
    (e.g:title-blue)
    * Avoid class name collisions, for example by using BEM class names.
  * Cross-Browser Support
    * Browser implement new features differently and with different speed
    * Use vendor-prefixes to use cutting-edge features AND support older browsers(partly)
    * @supports allows you to check for feature-support before using a property
    *  Polyfills can enable some css features which wouldn't work otherwise
    *  Consider normalizing CSS defaults across browsers
  * Vanilla CSS Vs Frameworks
    * Writing all styles from scratch gives you full control but comes with more work and responsibility
    * Componnet frameworks (e.g:Bootstrap 4) allow you to build web pages rapidly but with less control
    * Utility frameworks can be a good compromise

