import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	RootStackParamList,
	SCREENS,
} from 'src/modules/navigation/types/navigation.type';
import { SCREEN_OPTIONS } from 'src/modules/navigation/constants/screen-options';
import { ChatListScreen } from 'src/modules/chat';
import { ChatProvider } from 'src/shared/providers/ChatProvider';
import { Icon } from '@rneui/base';
import { COLORS } from 'src/shared/themes';
import { ProfileScreen } from 'src/modules/profile';

const getTabIcon = (isActive: boolean, name: string) =>
	isActive ? name : `${name}-outline`;

const BottomTabStack = createBottomTabNavigator<RootStackParamList>();

export const BottomTabStackComponent = () => {
	return (
		<ChatProvider>
			<BottomTabStack.Navigator
				screenOptions={SCREEN_OPTIONS}
				initialRouteName={SCREENS.PROFILE}
			>
				<BottomTabStack.Screen
					name={SCREENS.PROFILE}
					component={ProfileScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<Icon
								color={COLORS.coralBlue}
								type={'ionicon'}
								name={getTabIcon(focused, 'person-circle')}
							/>
						),
						tabBarLabelStyle: {
							color: COLORS.coralBlue,
						},
						tabBarLabel: 'Home',
					}}
				/>
				<BottomTabStack.Screen
					name={SCREENS.CHAT_LIST}
					component={ChatListScreen}
					options={{
						tabBarIcon: ({ focused }) => (
							<Icon
								color={COLORS.coralBlue}
								type={'ionicon'}
								name={getTabIcon(focused, 'chatbubbles')}
							/>
						),
						tabBarLabelStyle: {
							color: COLORS.coralBlue,
						},
						tabBarLabel: 'Chat',
					}}
				/>
			</BottomTabStack.Navigator>
		</ChatProvider>
	);
};
