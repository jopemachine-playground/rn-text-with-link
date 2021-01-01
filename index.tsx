import React, { useState, useEffect } from "react";
import { Text, Linking, StyleProp, TextStyle } from "react-native";

function openBrowser(link: string) {
  Linking.canOpenURL(link).then((supported: boolean) => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.error("Browser not supported!");
    }
  });
}

function TextWithLink({
  text,
  style,
  linkStyle = { color: "blue" },
  callback,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
  callback?: (url: string) => void;
  linkStyle?: StyleProp<TextStyle>;
}): JSX.Element {
  const [textComponent, setTextComponent] = useState(<></>);

  function ensureFlag(flags: any[], flag: any) {
    return flags.includes(flag) ? flags : flags + flag;
  }

  function* matchAll(str: string, regex: any) {
    const localCopy = new RegExp(regex, ensureFlag(regex.flags, "g"));
    let match = localCopy.exec(str);
    while (match) {
      yield match;
      match = localCopy.exec(str);
    }
  }

  useEffect(() => {
    // ** handle [label](url)
    const hasURL = /\[([ \n&%.?a-zA-Z0-9:+-_\\/]*)\]\(([&%.?a-zA-Z0-9:+-_\\/]*)\)/g;
    const results = matchAll(text, hasURL);

    let indexPointer: number = 0;

    let textComp = <></>;

    for (let result of results) {
      const captured = result[0];
      const label = result[1];
      const url = result[2];
      const startindex = result.index;
      const endIndex = result.index + captured.length;

      const beforeTxt = text.substr(indexPointer, startindex - indexPointer);
      indexPointer = endIndex;

      textComp = appendNormalText(beforeTxt, textComp);
      textComp = appendHyperlink(label, url, textComp);
    }

    const remainingTxt = text.substr(indexPointer, text.length);

    textComp = appendNormalText(remainingTxt, textComp);

    setTextComponent(textComp);
  }, []);

  const onPressHandler = (url: string) => {
    if (callback) {
      callback(url);
    } else {
      openBrowser(url);
    }
  };

  const appendNormalText = (label: string, preText: JSX.Element) => {
    return (
      <Text style={style} selectable>
        {preText}
        {label}
      </Text>
    );
  };

  const appendHyperlink = (
    label: string,
    url: string,
    preText: JSX.Element
  ): JSX.Element => {
    return (
      <Text style={linkStyle} selectable onPress={() => onPressHandler(url)}>
        {preText}
        {label}
      </Text>
    );
  };

  return textComponent;
}

export default TextWithLink;
