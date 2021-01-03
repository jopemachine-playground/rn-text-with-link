import React, { useState, useEffect } from "react";
import { Text, Linking, StyleProp, TextStyle } from "react-native";

interface Wrapper<T> {
  content: T
}

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
  customCallbackTable,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
  callback?: (url: string) => void;
  linkStyle?: StyleProp<TextStyle>;
  customCallbackTable?: Object;
}): JSX.Element {
  const [textComponent, setTextComponent] = useState<JSX.Element>(<></>);

  function ensureFlag(flags: string, flag: string) {
    return flags.includes(flag) ? flags : flags + flag;
  }

  function* matchAll(str: string, regex: RegExp) {
    const localCopy = new RegExp(regex, ensureFlag(regex.flags, "g"));
    let match = localCopy.exec(str);
    while (match) {
      yield match;
      match = localCopy.exec(str);
    }
  }

  useEffect(() => {
    // ** handle [label](url)
    const hasURL: RegExp = /\[([ \n&%.?a-zA-Z0-9:+-_\\/]*)\]\(([&%.?a-zA-Z0-9:+-_\\/]*|!)\)/g;
    const results: Generator<RegExpExecArray, void, unknown> = matchAll(
      text,
      hasURL
    );

    let indexPointer: number = 0;

    let textCompWrapper: Wrapper<JSX.Element> = { content: <></> };

    for (let result of results) {
      const captured: string = result[0];
      const label: string = result[1];
      const url: string = result[2];
      const sIndex: number = result.index;
      const eIndex: number = result.index + captured.length;

      const beforeTxt: string = text.substr(indexPointer, sIndex - indexPointer);
      indexPointer = eIndex;

      appendNormalText(textCompWrapper, beforeTxt);

      if (customCallbackTable && url === '!') {
        appendHyperlink(textCompWrapper, label, url, customCallbackTable[label]);
      } else {
        appendHyperlink(textCompWrapper, label, url);
      }
    }

    const remainingTxt: string = text.substr(indexPointer, text.length);

    appendNormalText(textCompWrapper, remainingTxt);
    setTextComponent(textCompWrapper.content);
  }, []);

  const onPressHandler = (url: string) => {
    if (callback) {
      callback(url);
    } else {
      openBrowser(url);
    }
  };

  const appendNormalText = (textComp: Wrapper<JSX.Element>, textToAppend: string): void => {
    textComp.content = (
      <Text style={style} selectable>
        {textComp.content}
        {textToAppend}
      </Text>
    );
  };

  const appendHyperlink = (
    textComp: Wrapper<JSX.Element>,
    textToAppend: string,
    url: string,
    customCb?: () => void
  ): void => {
    const cb = customCb ? () => customCb() : () => onPressHandler(url);

    textComp.content = (
      <Text style={linkStyle} selectable onPress={cb}>
        {textComp.content}
        {textToAppend}
      </Text>
    );
  };

  return textComponent;
}

export default TextWithLink;
