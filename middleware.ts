// Protecting routes with next-auth
// https://next-auth.js.org/configuration/nextjs#middleware
// https://nextjs.org/docs/app/building-your-application/routing/middleware

import { NextApiRequest, NextApiResponse } from 'next';

// no next auth installed , just empty middleware

export default async (req: NextApiRequest, res: NextApiResponse, next) => {
  return next();
};
