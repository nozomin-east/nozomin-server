if (!global._babelPolyfill) {
  require('babel-polyfill');
}
import { https } from "firebase-functions"
import apolloServer from "./apollo/"

const handler = apolloServer.createHandler();

export const apollo = https.onRequest(handler);
