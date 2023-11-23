import type { NextApiHandler } from 'next';

import { server } from '../../../graphql-server';
const { handleRequest } = server;

export const dynamic = 'force-dynamic';

export const POST: NextApiHandler = (req, res) => {
  return handleRequest(req as never, { req, res });
};

export const GET: NextApiHandler = (req, res) => {
  return handleRequest(req as never, { req, res });
};
