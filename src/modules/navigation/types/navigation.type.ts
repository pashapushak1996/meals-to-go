export enum SCREENS {
	AUTH_STACK = 'SCREEN:AUTH_STACK',
	BOTTOM_BAR = 'SCREEN:BOTTOM_BAR',

	// SCREENS
	SIGN_IN = 'SCREEN:SIGN_IN',
	SIGN_UP = 'SCREEN:SIGN_UP',
	HOME = 'SCREEN:HOME',
}

export type RootStackParamList = {
	[SCREENS.AUTH_STACK]: undefined;
	[SCREENS.BOTTOM_BAR]: undefined;

	// SCREENS
	[SCREENS.SIGN_IN]: undefined;
	[SCREENS.SIGN_UP]: undefined;
	[SCREENS.HOME]: undefined;
};
