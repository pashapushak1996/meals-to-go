import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/base';

import { SPACING } from 'src/shared/themes/spacing';
import { SCREENS } from 'src/modules/navigation/types/navigation.type';
import { Skeleton } from 'src/shared/components/skeleton';
import { authService } from 'src/modules/auth/service/authService';

export const SignUpScreen = () => {
	const [userData, setUserData] = useState({ email: '', password: '' });
	const navigation = useNavigation();

	const handleInputChange =
		(type: 'email' | 'password') => (text: string) => {
			setUserData((prev) => ({ ...prev, [type]: text }));
		};

	const [loading, setLoading] = useState(false);

	async function signUpWithEmail() {
		setLoading(true);
		const {
			data: { session },
			error,
		} = await authService.register(userData);

		if (error) {
			setLoading(false);
			Alert.alert(error.message);
			return;
		}

		if (!session) {
			Alert.alert('Please check your inbox for email verification!');
		}

		navigation.navigate(SCREENS.SIGN_IN);

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
					title={'Sign up'}
					onPress={signUpWithEmail}
					loading={loading}
					style={styles.buttonStyles}
				/>
				<View style={styles.bottomTextContainer}>
					<Text style={styles.bottomText}>
						You already have an account?
					</Text>
					<Button
						size={'sm'}
						type={'clear'}
						title={'Sign in'}
						titleStyle={styles.bottomText}
						onPress={() => navigation.navigate(SCREENS.SIGN_IN)}
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
