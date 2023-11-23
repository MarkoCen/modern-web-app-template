import { server } from '../../../graphql-server';

const { handleRequest } = server;

export const dynamic = 'force-dynamic';

export { handleRequest as GET, handleRequest as POST };
