# Accessible Rich Internet Applications (WAI-ARIA) 1.0

## [Accessible Rich Internet Applications (WAI-ARIA) 1.0](https://www.w3.org/TR/wai-aria/)

> **Accessible Rich Internet Applications (WAI-ARIA) 1.0**
> W3C Recommendation 20 March 2014

## [wai-aria-accessible-rich-internet-applications-basics](http://www.evotech.net/blog/2009/03/wai-aria-accessible-rich-internet-applications-basics/#comment-33713)

## [WAI-ARIA Roles](https://www.w3.org/TR/wai-aria/usage#usage_intro)
### demo 

```html
<li role="menuitemcheckbox" aria-checked="true">Sort by Last Modified</li>
```  

### [CSS 2.2 attribute selectors](https://www.w3.org/TR/CSS22/selector.html#attribute-selectors)
### [CSS 2.1 attribute selectors](https://www.w3.org/TR/CSS2/selector.html#attribute-selectors)

```css
[aria-checked="true"] { font-weight: bold; }
[aria-checked="true"]:before { background-image: url(checked.gif); }
```  

### [6. Supported States and Properties](https://www.w3.org/TR/wai-aria/states_and_properties)
```html
<li role="menuitemcheckbox" aria-checked="true">
  <img src="checked.gif" role="presentation" alt="">
  <!-- note: additional scripts required to toggle image source -->
  Sort by Last Modified
</li>
```  

```code
Values for the ARIA States (For descriptions, roll over the items below)

busy checked disabled

expanded grab hidden

invali dpressed selected

Values for the ARIA Properties (For descriptions, roll over the items below)

activedescendant atomic autocomplete 

channel controls datatype 

describedby dropeffect flowto 

haspopup labelledby level 

live multiline multiselectable 

owns posinset readonly 

relevant required secret 

setsize sort tabindex 

templateid valuemax valuemin 

valuenow

```  

