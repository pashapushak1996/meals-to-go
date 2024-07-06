import { useCallback } from 'react';

import { useAuthStore } from 'src/modules/auth/store/useAuthStore';
import { supabase } from 'src/shared/lib';

export const useAuth = () => {
	const { isAuthenticated, setIsAuthenticated, setUser, user } =
		useAuthStore();

	const refreshSession = useCallback(async () => {
		const session = await supabase.auth.getSession();

		if (session?.data?.session) {
			const { id, email } = session.data.session.user;

			setIsAuthenticated(true);
			setUser({ id, email: email as string });

			return;
		}
	}, []);

	return {
		refreshSession,
		isAuthenticated,
		user,
	};
};
