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
    id: '1',
    name: 'Frontend Team',
    members: [
      { id: 'u1', name: 'Ali Karimov', role: 'React Developer' },
      { id: 'u2', name: 'Dilnoza Saidova', role: 'UI Engineer' },
      { id: 'u3', name: 'Jasur Abdullaev', role: 'TypeScript Developer' },
    ],
  },
  {
    id: '2',
    name: 'Backend Team',
    members: [
      { id: 'u4', name: 'Sardor Rahimov', role: 'Node.js Developer' },
      { id: 'u5', name: 'Malika Islomova', role: 'Database Engineer' },
    ],
  },
  {
    id: '3',
    name: 'Mobile Team',
    members: [{ id: 'u6', name: 'Umidjon Tursunov', role: 'Flutter Developer' }],
  },
]