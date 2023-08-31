import { server } from '@graphql/index';

const { handleRequest } = server;

export { handleRequest as GET, handleRequest as POST };
