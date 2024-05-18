import { StyleSheet } from 'react-native';

import { EdgeInsets } from 'react-native-safe-area-context';

export const styles = (insets: EdgeInsets) =>
	StyleSheet.create({
		container: {
			flex: 1,
			paddingBottom: insets.bottom,
			paddingLeft: insets.left,
			paddingRight: insets.right,
			paddingTop: insets.top,
		},
	});
