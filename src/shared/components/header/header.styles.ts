import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: COLORS.smokyBlack,
		borderBottomColor: COLORS.dimGrey,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 32,
		paddingHorizontal: 16,
		paddingVertical: 16,
		position: 'relative',
	},
	dummy: {
		height: 40,
		width: 40,
	},
	pressarableIcon: {
		height: 40,
		width: 40,
	},
	rightButtonWrapper: {
		alignItems: 'center',
		flexDirection: 'row',
		height: 40,
		width: 40,
	},
	title: {
		color: COLORS.antiFlashWhite,
		flexGrow: 1,
		fontFamily: FONTS.Roboto.regular,
		fontSize: 26,
		lineHeight: 34,
		textAlign: 'center',
	},
	titleBox: {
		alignItems: 'center',
		flexDirection: 'row',
	},
});
