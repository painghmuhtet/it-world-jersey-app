import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  BackHandler,
  Linking,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const APP_URL = "https://itworldjersey.store/app/";
const ALLOWED_HOST = "itworldjersey.store";
const BG = "#080b10";

function isInternal(url) {
  if (url === "about:blank") return true;
  const match = /^https?:\/\/([^/:?#]+)/i.exec(url);
  if (!match) return false;
  const host = match[1].toLowerCase();
  return host === ALLOWED_HOST || host.endsWith("." + ALLOWED_HOST);
}

export default function App() {
  const webRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Platform.OS !== "android") return undefined;
    const sub = BackHandler.addEventListener("hardwareBackPress", () => {
      if (canGoBack && webRef.current) {
        webRef.current.goBack();
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [canGoBack]);

  const onShouldStart = useCallback((request) => {
    if (isInternal(request.url)) return true;
    // External links (WhatsApp, tel:, mailto:, other sites) open outside the app.
    Linking.openURL(request.url).catch(() => {});
    return false;
  }, []);

  const retry = () => {
    setFailed(false);
    setLoading(true);
    if (webRef.current) webRef.current.reload();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar barStyle="light-content" backgroundColor={BG} />

        {failed ? (
          <View style={styles.center}>
            <Text style={styles.title}>IT WORLD JERSEY</Text>
            <Text style={styles.message}>
              Can't connect. Check your internet connection and try again.
            </Text>
            <Pressable style={styles.button} onPress={retry}>
              <Text style={styles.buttonText}>TRY AGAIN</Text>
            </Pressable>
          </View>
        ) : (
          <WebView
            ref={webRef}
            source={{ uri: APP_URL }}
            style={styles.web}
            containerStyle={styles.web}
            originWhitelist={["*"]}
            onShouldStartLoadWithRequest={onShouldStart}
            onNavigationStateChange={(s) => setCanGoBack(s.canGoBack)}
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
            onError={() => setFailed(true)}
            onHttpError={(e) => {
              if (e.nativeEvent.statusCode >= 500) setFailed(true);
            }}
            javaScriptEnabled
            domStorageEnabled
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction={false}
            allowsBackForwardNavigationGestures
            pullToRefreshEnabled
            setSupportMultipleWindows={false}
            sharedCookiesEnabled
          />
        )}

        {loading && !failed ? (
          <View style={styles.loader} pointerEvents="none">
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        ) : null}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: BG },
  web: { flex: 1, backgroundColor: BG },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 28,
  },
  title: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 0.6,
  },
  message: {
    color: "#9da4af",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 20,
  },
  button: {
    marginTop: 22,
    backgroundColor: "#ffffff",
    paddingHorizontal: 22,
    paddingVertical: 13,
    borderRadius: 12,
  },
  buttonText: { color: BG, fontSize: 13, fontWeight: "900" },
  loader: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BG,
  },
});
