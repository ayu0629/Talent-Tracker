import { Inngest } from "inngest";

export const inngest=new Inngest({
    id:"major-project",
     name:"sensai",
     credentials:{
        gemini: {
            apikey: process.env.GEMINI_API_KEY,
        },
     },

});