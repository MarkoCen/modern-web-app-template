import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { bootstrap } from '../../backend';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return new Promise(async (resolve) => {
    const httpServer = await bootstrap();
    const [ listener ] = httpServer.listeners("request") as NextApiHandler[];
    listener(req, res);
    res.on("finish", resolve);
  })
}

export default handler;
