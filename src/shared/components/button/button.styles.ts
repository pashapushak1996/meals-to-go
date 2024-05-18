import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from 'src/shared/themes';

export const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		backgroundColor: COLORS.internationalOrange,
		borderRadius: 32,
		justifyContent: 'center',
		paddingVertical: 10,
	},
	content: {
		flexDirection: 'row',
	},
	disabledBtn: {
		backgroundColor: COLORS.dimGrey,
	},
	disabledText: {
		color: COLORS.chineseSilver,
	},
	iconWrapper: {
		marginRight: 8,
	},
	text: {
		color: COLORS.antiFlashWhite,
		fontFamily: FONTS.Roboto.medium,
		fontSize: 16,
		lineHeight: 24,
	},
});
