import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import { Skeleton } from 'src/shared/components/skeleton';
import { useAuthStore } from 'src/modules/auth/store/useAuthStore';
import { Button } from '@rneui/base';
import { authService } from 'src/modules/auth/service/authService';

export const HomeScreen = () => {
	const { user, setUser, setIsAuthenticated } = useAuthStore();

	const logOut = async () => {
		const data = await authService.logout();

		if (data) {
			Alert.alert('Try again later', data.message);

			return;
		}

		setUser(null);
		setIsAuthenticated(false);
	};

	return (
		<Skeleton>
			<View>
				<Text>{user?.email}</Text>
				<Button
					color={'secondary'}
					title={'Log out'}
					onPress={logOut}
				/>
			</View>
		</Skeleton>
	);
};
