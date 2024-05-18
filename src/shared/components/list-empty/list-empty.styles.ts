import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	text: {
		color: COLORS.dimGrey,
		fontFamily: FONTS.Roboto.medium,
		fontSize: 16,
		lineHeight: 18,
		textAlign: 'center',
	},
});
