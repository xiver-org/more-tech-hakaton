export const getApiUrl = () => {
	const config = useRuntimeConfig();
	if (import.meta.server) {
		return config.ssrBaseApiUrl;
	} else {
		return "/api";
	}
};
