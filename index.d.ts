import { StyleProp, TextStyle } from "react-native";

export default function TextWithLink({
  text,
  style,
  callback,
  linkStyle,
  customCallbackTable,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
  callback?: (url: string) => void;
  linkStyle?: StyleProp<TextStyle>;
  customCallbackTable?: Object;
}): JSX.Element;
