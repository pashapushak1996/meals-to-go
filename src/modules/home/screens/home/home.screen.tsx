import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import { Skeleton } from 'src/shared/components/skeleton';
import { useUserStore } from 'src/modules/auth/store/useUserStore';
import { Button } from '@rneui/base';
import { supabase } from 'src/shared/lib';

export const HomeScreen = () => {
	const { user, setUser, setIsAuthenticated } = useUserStore();

	const logOut = async () => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			Alert.alert('Try again later', error.message);

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
