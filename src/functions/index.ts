import { https } from "firebase-functions";
import apolloServer from "./apollo";

const handler = apolloServer.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});

export const apollo = https.onRequest(handler);
