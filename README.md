# rn-text-with-link
<img src="https://img.shields.io/github/license/jopemachine/rn-text-with-link.svg" alt="License">

Create simple text component with hyperlink in React Native

<img src="./demo.gif">

## Example

Check [App.js]() in the Example folder.

## API

### TextWithLink

#### text: `string`

Enter text. urls could be represented by like this way. `[label](url)`

Example:

```js
import TextWithLink from 'rn-text-with-link';

...

<TextWithLink
   text={
      'You acknowledge that you have read the [Privacy Policy](https://some_privacy_policy.com)'
   }
/>


```



#### style?: `StyleProp<TextStyle>`

Style of normal text which not contains hyperlink



#### callback?: `(url: string) => void`

Callback function of onPressEvent of hyperlink.



#### linkStyle?: `StyleProp<TextStyle>`

The style of hyperlink text.
