import * as React from 'react';

import { Text, View } from 'react-native';
import { Skeleton } from 'src/shared/components/skeleton';

import HeartIcon from 'src/assets/icons/heart.svg';
import { COLORS } from 'src/shared/themes';

export const HomeScreen = () => {
	return (
		<Skeleton>
			<View>
				<Text>Home Screen</Text>
				<HeartIcon width={50} height={50} fill={COLORS.americanGreen} />
			</View>
		</Skeleton>
	);
};
