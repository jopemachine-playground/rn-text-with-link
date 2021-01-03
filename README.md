# rn-text-with-link
<img src="https://img.shields.io/github/license/jopemachine/rn-text-with-link.svg" alt="License">

Create simple text component with hyperlink in React Native

<img src="./demo.gif" width="30%" height="30%">

## Install

```
npm i rn-text-with-link
```

## Example

Check [App.js](https://github.com/jopemachine/rn-text-with-link/blob/main/Example/App.js) in the Example folder.

## API

### TextWithLink

#### text: `string`

Enter text through this.

urls could be represented by like this way. `[label](url)`

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

#### linkStyle?: `StyleProp<TextStyle>`

The style of hyperlink text.

#### callback?: `(url: string) => void | CallbackTable`

1) `Function` type : Callback function of onPressEvent of hyperlink.

You can simply put `!` in the url's place if you don't need to use url in your custom callback.

```js
import TextWithLink from 'rn-text-with-link';

...

const gotoSignUpScreen = () => {
  ...
};

...

<TextWithLink
  text={"Don't have an account? [Sign up](!)"}
  callback={gotoSignUpScreen}
/>

```


2) `CallbackTable` type (Object type)

It could be useful when you want to bind a different callback function to a particular "link".

You can simply put `!` in the url's place if you don't need to use url in your custom callback.

Example:

```js
import TextWithLink from 'rn-text-with-link';

...

const handleSignIn = () => {
  ...
};

const gotoSignUpScreen = () => {
  ...
};

...

<TextWithLink
  text={"[Sign in](!) \nDon't have an account? [Sign up](!)"}
  callback={{
    'Sign in': handleSignIn,
    'Sign up': gotoSignUpScreen,
  }}
/>

```
