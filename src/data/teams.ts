export type TeamMember = {
  id: string
  name: string
  role: string
}

export type Team = {
  id: string
  name: string
  members: TeamMember[]
}

export const teams: Team[] = [
  {
    id: 'frontend',
    name: 'Frontend Team',
    members: [
      { id: 'u1', name: 'Ali Karimov', role: 'React Developer' },
      { id: 'u2', name: 'Dilnoza Saidova', role: 'UI Engineer' },
      { id: 'u3', name: 'Jasur Abdullaev', role: 'TypeScript Developer' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend Team',
    members: [
      { id: 'u4', name: 'Sardor Rahimov', role: 'Node.js Developer' },
      { id: 'u5', name: 'Malika Islomova', role: 'Database Engineer' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Team',
    members: [{ id: 'u6', name: 'Umidjon Tursunov', role: 'Flutter Developer' }],
  },
]

export function getTeams(): Team[] {
  return teams
}

export function getTeamById(id: string): Team | undefined {
  return teams.find((t) => t.id === id)
}
