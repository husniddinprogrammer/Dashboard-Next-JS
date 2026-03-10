import { teams } from '@/data/teams'
import { projects } from '@/data/projects'

export default function handler(req, res) {
  res.status(200).json({
    teams,
    projects
  })
}