import { RootStackParamList } from 'src/modules/navigation/types/navigation.type';

// It we can do when we don't want to type navigation
declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
