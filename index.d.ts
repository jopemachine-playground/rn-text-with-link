import { StyleProp, TextStyle } from "react-native";

export interface Wrapper<T> {
  content: T;
}

export interface CallbackTable {
  [cb: string]: ((url: string) => void) | (() =>  void)
}

export default function TextWithLink({
  text,
  style,
  callback,
  linkStyle,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
  callback?: ((url: string) => void) | CallbackTable;
  linkStyle?: StyleProp<TextStyle>;
}): JSX.Element;
