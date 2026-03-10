export type ProjectMember = {
  id: string
  name: string
  role: string
}

export type Project = {
  id: string
  name: string
  description: string
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold'
  startDate: string
  endDate?: string
  members: ProjectMember[]
}

export const projects: Project[] = [
  {
    id: 'dashboard-redesign',
    name: 'Dashboard Redesign',
    description: 'Admin panelning UI/UX yangilash va responsiv qilish',
    status: 'in-progress',
    startDate: '2024-01-15',
    endDate: '2024-03-30',
    members: [
      { id: 'u1', name: 'Ali Karimov', role: 'Frontend Lead' },
      { id: 'u2', name: 'Dilnoza Saidova', role: 'UI Designer' },
      { id: 'u3', name: 'Jasur Abdullaev', role: 'TypeScript Developer' },
    ],
  },
  {
    id: 'api-migration',
    name: 'API Migration to Node.js',
    description: 'Legacy API’larni Node.js + Express ga ko‘chirish',
    status: 'planning',
    startDate: '2024-02-01',
    endDate: '2024-05-15',
    members: [
      { id: 'u4', name: 'Sardor Rahimov', role: 'Backend Lead' },
      { id: 'u5', name: 'Malika Islomova', role: 'Database Engineer' },
      { id: 'u6', name: 'Umidjon Tursunov', role: 'DevOps' },
    ],
  },
  {
    id: 'mobile-app',
    name: 'Mobile App MVP',
    description: 'Flutter orqali iOS/Android MVP ilovasi',
    status: 'completed',
    startDate: '2023-11-10',
    endDate: '2024-01-20',
    members: [
      { id: 'u6', name: 'Umidjon Tursunov', role: 'Flutter Developer' },
      { id: 'u7', name: 'Nodira Azimova', role: 'QA Engineer' },
    ],
  },
  {
    id: 'payment-integration',
    name: 'Payment Gateway Integration',
    description: 'Click va UmePay integratsiyasi',
    status: 'on-hold',
    startDate: '2024-03-01',
    members: [
      { id: 'u4', name: 'Sardor Rahimov', role: 'Backend Developer' },
      { id: 'u8', name: 'Bekzod Ruzmetov', role: 'Security Specialist' },
    ],
  },
]