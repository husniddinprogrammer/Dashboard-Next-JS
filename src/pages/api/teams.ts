import { teams } from '@/data/teams'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ teams })
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: 'Method not allowed' })
  }
}
