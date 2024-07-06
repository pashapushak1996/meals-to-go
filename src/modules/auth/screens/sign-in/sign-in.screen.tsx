import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Skeleton } from 'src/shared/components/skeleton';
import { Button, Input } from '@rneui/base';

import { SPACING } from 'src/shared/themes/spacing';
import { useAuthStore } from 'src/modules/auth/store/useAuthStore';
import { SCREENS } from 'src/modules/navigation/types/navigation.type';
import { authService } from 'src/modules/auth/service/authService';

export const SignInScreen = () => {
	const [userData, setUserData] = useState({ email: '', password: '' });
	const { setUser, setIsAuthenticated } = useAuthStore();
	const [loading, setLoading] = useState(false);
	const navigation = useNavigation();

	const handleInputChange =
		(type: 'email' | 'password') => (text: string) => {
			setUserData((prev) => ({ ...prev, [type]: text }));
		};

	async function signInWithEmail() {
		setLoading(true);
		const { error, data } = await authService.login(userData);

		if (error) {
			setLoading(false);
			Alert.alert(error.message);

			return;
		}

		const { user, session } = data;

		if (!session) {
			Alert.alert('Please check your inbox for email verification');

			return;
		}

		if (user && session) {
			setUser({ email: user.email as string, id: user.id });
			setIsAuthenticated(true);

			navigation.navigate(SCREENS.BOTTOM_BAR);
		}

		setLoading(false);
	}

	return (
		<Skeleton>
			<View style={styles.container}>
				<Input
					label="Email"
					leftIcon={{ type: 'ionicon', name: 'mail-outline' }}
					onChangeText={handleInputChange('email')}
					value={userData.email}
					placeholder="email@address.com"
					autoCapitalize={'none'}
				/>
				<Input
					label="Password"
					leftIcon={{ type: 'ionicon', name: 'lock-closed-outline' }}
					onChangeText={handleInputChange('password')}
					value={userData.password}
					secureTextEntry={true}
					placeholder="Password"
					autoCapitalize={'none'}
				/>
				<Button
					title={'Sign in'}
					onPress={signInWithEmail}
					loading={loading}
					style={styles.buttonStyles}
				/>
				<View style={styles.bottomTextContainer}>
					<Text style={styles.bottomText}>
						You dont have an account yet?
					</Text>
					<Button
						size={'sm'}
						type={'clear'}
						title={'Sign up'}
						titleStyle={styles.bottomText}
						onPress={() => navigation.navigate(SCREENS.SIGN_UP)}
					/>
				</View>
			</View>
		</Skeleton>
	);
};

const styles = StyleSheet.create({
	bottomText: { fontSize: 16 },
	bottomTextContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	buttonStyles: {
		marginBottom: SPACING.L,
	},
	container: {
		paddingHorizontal: SPACING.L,
	},
});
