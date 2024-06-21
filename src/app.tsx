import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { RootNavigator } from './modules/navigation/components/root-navigator';
import { useDevtools } from './shared/hooks/devtools.hook';

const App = () => {
	useDevtools();

	return (
		<GestureHandlerRootView style={styles.flex}>
			<SafeAreaProvider>
				<RootNavigator />
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
};

const styles = StyleSheet.create({ flex: { flex: 1 } });

export default App;
