import { create } from 'zustand';

import { IUser } from 'src/shared/types';

type State = {
	user: IUser | null;
	isAuthenticated: boolean;
};

type Actions = {
	setUser: (user: IUser) => void;
	setIsAuthenticated: (isAuthenticated: boolean) => void;
};

export const useUserStore = create<State & Actions>((set) => ({
	user: null,
	isAuthenticated: false,
	setUser: (user: IUser) => set(() => ({ user })),
	setIsAuthenticated: (isAuthenticated: boolean) =>
		set(() => ({ isAuthenticated })),
}));
