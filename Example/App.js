/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TextWithLink from 'rn-text-with-link';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.outerContainer}>
        <View style={styles.detailedDescContainer}>
          <TextWithLink
            text={
              'By tapping ”Sign Up & Accept”, you\n acknowledge that you have read the [Privacy Policy](https://some_privacy_policy.com) and agree to [Terms of service](https://www.some_tos.com)'
            }
            style={styles.detailedDescText}
            linkStyle={styles.linkStyle}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    top: 84,
    left: 24,
    position: 'absolute',
    fontSize: 40,
    color: '#fff',
  },
  outerContainer: {
    backgroundColor: '#11151C',
    justifyContent: 'center',
    height: '100%',
  },
  detailedDescText: {
    textAlign: 'center',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 16.8,
    color: '#656B7A',
  },
  detailedDescContainer: {
    marginLeft: 37,
    marginRight: 36,
    marginBottom: 67,
  },
  linkStyle: {
    color: 'white',
  },
});

export default App;
