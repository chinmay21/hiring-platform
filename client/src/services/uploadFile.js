import { uploadcareClient } from "./uploadcare";

export const uploadFile = async (file) => {
    try{
        const uploadedFile = await uploadcareClient.uploadFile(file);

        return {
            uuid: uploadedFile.uuid,
            cdnUrl: uploadedFile.cdnUrl,
        };
    }
    catch(error) {
        console.error("Resume upload failed:", error);
        throw error;
    }
};