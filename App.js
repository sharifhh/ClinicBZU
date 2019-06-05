import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class App extends Component<Props> {
  render() {
    return (
      <WebView source={{ uri: 'http://176.119.254.188/' }} />
    );
  }
}
