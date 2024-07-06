export enum SCREENS {
	AUTH_STACK = 'SCREEN:AUTH_STACK',
	BOTTOM_BAR = 'SCREEN:BOTTOM_BAR',
	CHAT_STACK = 'SCREEN:CHAT_STACK',

	// SCREENS
	SIGN_IN = 'SCREEN:SIGN_IN',
	SIGN_UP = 'SCREEN:SIGN_UP',
	PROFILE = 'SCREEN:PROFILE',
	CHAT_LIST = 'SCREEN:CHAT_LIST',
	CHAT = 'SCREEN:CHAT',
}

export type RootStackParamList = {
	[SCREENS.AUTH_STACK]: undefined;
	[SCREENS.BOTTOM_BAR]: undefined;
	[SCREENS.CHAT_STACK]: { screen: any; params: any };

	// SCREENS
	[SCREENS.SIGN_IN]: undefined;
	[SCREENS.SIGN_UP]: undefined;
	[SCREENS.PROFILE]: undefined;
	[SCREENS.CHAT_LIST]: undefined;
	[SCREENS.CHAT]: undefined;
};
