import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { styles } from './skeleton.styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMemo } from 'react';

type SkeletonProps = {
	children: React.ReactNode;
	extraSafeAreaStyles?: StyleProp<ViewStyle>;
};

export const Skeleton: React.FunctionComponent<SkeletonProps> = ({
	children,
	extraSafeAreaStyles = {},
}) => {
	const insets = useSafeAreaInsets();

	const commonStyles = useMemo(() => {
		return styles(insets).container;
	}, [insets]);

	return <View style={[commonStyles, extraSafeAreaStyles]}>{children}</View>;
};
