import * as React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

import { styles } from './custom-modal.styles';

type ModalProps = {
	children: React.ReactNode;
	isVisible: boolean;
	title: string;
	close: () => void;
	additionalContainerStyles?: StyleProp<ViewStyle>;
	additionalChildrenWrapperStyles?: StyleProp<ViewStyle>;
	onModalHide?: () => void;
	isInfoPopup?: boolean;
};

export const CustomModal: React.FunctionComponent<ModalProps> = ({
	children,
	isVisible,
	title,
	close,
	onModalHide,
	additionalContainerStyles = {},
	additionalChildrenWrapperStyles = {},
}) => {
	return (
		<Modal
			isVisible={isVisible}
			style={styles.modal}
			backdropOpacity={0.7}
			onBackdropPress={close}
			onModalHide={onModalHide}
			animationInTiming={500}
			animationOutTiming={500}
			backdropTransitionInTiming={500}
			backdropTransitionOutTiming={0}
		>
			<View style={additionalContainerStyles}>
				<View style={styles.contentWrapper}>
					<View style={styles.titleWrapper}>
						<Text style={styles.title}>{title}</Text>
					</View>
					<View
						style={[
							styles.childrenWrapper,
							additionalChildrenWrapperStyles,
						]}
					>
						{children}
					</View>
				</View>
			</View>
		</Modal>
	);
};
