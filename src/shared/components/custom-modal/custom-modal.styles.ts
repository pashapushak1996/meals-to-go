import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
	childrenWrapper: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		paddingHorizontal: 24,
		paddingTop: 16,
	},
	closeBlock: {
		flexDirection: 'row',
		paddingHorizontal: 24,
	},
	closeTitle: {
		color: COLORS.antiFlashWhite,
		fontFamily: FONTS.Roboto.regular,
		fontSize: 26,
		lineHeight: 34,
		marginLeft: 12,
		textTransform: 'capitalize',
	},
	contentWrapper: {
		backgroundColor: COLORS.eerieBlack,
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
		paddingBottom: 32,
		paddingTop: 16,
	},
	modal: {
		justifyContent: 'flex-end',
		margin: 0,
	},
	title: {
		color: COLORS.antiFlashWhite,
		fontFamily: FONTS.Roboto.regular,
		fontSize: 20,
		lineHeight: 24,
		paddingHorizontal: 24,
		textAlign: 'center',
	},
	titleWrapper: {
		borderBottomColor: COLORS.dimGrey,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		paddingBottom: 16,
	},
});
