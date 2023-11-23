import { server } from '../../../graphql-server';

const { handleRequest } = server;

export { handleRequest as GET, handleRequest as POST };
