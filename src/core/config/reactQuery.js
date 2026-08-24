const defaultOptions = {
  queries: {
    staleTime: 2 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: (failureCount, error) => {
      const status = error?.response?.status || error?.status;
      if (status === 401 || status === 403) {
        return false;
      }
      return failureCount < 1;
    },
  },
};

export default defaultOptions;
