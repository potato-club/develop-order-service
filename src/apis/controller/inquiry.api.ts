import sendApi from "../sendApi";


export const InquiryApi ={
    getInquiry: async () => {
        const response = await sendApi.get("/inquiry");
        return response.data;
      }

};