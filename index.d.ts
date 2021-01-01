import { StyleProp, TextStyle } from "react-native";

export function TextWithLink(
  text: string,
  style?: StyleProp<TextStyle>,
  callback?: (url: string) => void,
  linkStyle?: StyleProp<TextStyle>
): JSX.Element;
