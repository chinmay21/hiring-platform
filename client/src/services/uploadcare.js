import { AuthTokenCache } from '@uploadcare/signed-uploads/client';
import { UploadClient } from '@uploadcare/upload-client';

import { apiConnector } from '../redux/apiConnector';
import { uploadcareEndpoints } from '../redux/apis';

const tokenCache = new AuthTokenCache({
    fetchToken: async () => {
        const response = await apiConnector("GET", uploadcareEndpoints.GENERATE_UPLOADCARE_TOKEN_API);
        return response.data.token;
    }
});

export const uploadcareClient = new UploadClient({
    publicKey: import.meta.VITE_UPLOADCARE_PUBLIC_KEY,
    authToken: tokenCache,
    store: true,
});