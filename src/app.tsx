import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from './modules/navigation/components/root-navigator';
import { useDevtools } from './shared/hooks/devtools.hook';
import { OverlayProvider } from 'stream-chat-react-native';
import { StyleSheet } from 'react-native';

const App = () => {
	useDevtools();

	return (
		<GestureHandlerRootView style={styles.flex}>
			<SafeAreaProvider>
				<OverlayProvider>
					<RootNavigator />
				</OverlayProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({ flex: { flex: 1 } });

export default App;
