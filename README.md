# rn-text-with-link

Create simple text component with hyperlink in React Native

## API

### TextWithLink

#### text: `string`

Enter text. urls could be represented by like this way. `[label](url)`

Example:

```
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
