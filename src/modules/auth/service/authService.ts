import { supabase } from 'src/shared/lib';

interface IUserCredentials {
	email: string;
	password: string;
}

export const authService = {
	login: async (userData: IUserCredentials) => {
		const { error, data } =
			await supabase.auth.signInWithPassword(userData);

		return { error, data };
	},

	logout: async () => {
		const { error } = await supabase.auth.signOut();

		if (error) {
			return error;
		}

		// In this way I'll check that logout was successful
		return null;
	},

	register: async (userData: IUserCredentials) => {
		const { error, data } = await supabase.auth.signUp(userData);

		return { error, data };
	},
};
