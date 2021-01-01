import { StyleProp, TextStyle } from "react-native";

export default function TextWithLink({
  text,
  style,
  callback,
  linkStyle,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
  callback?: (url: string) => void;
  linkStyle?: StyleProp<TextStyle>;
}): JSX.Element;
