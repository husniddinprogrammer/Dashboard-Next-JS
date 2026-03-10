import { teams } from '@/data/teams'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const team = teams.find((t) => t.id === req.query.id)
  
  if (!team) {
    res.status(404).json({ message: 'Team not found' })
    return
  }
  res.status(200).json(team)
}