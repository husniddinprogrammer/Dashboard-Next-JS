import { log } from "console"

const baseURL = 'http://localhost:3000/api'
// const baseURL = 'https://dashboard-next-js-omega-sooty.vercel.app/api'

export const getTeams = async () => {
    try {
        const response = await fetch(`${baseURL}/teams`)
        const data = await response.json()
        return data.teams
    } catch (error) {
        console.error('Error fetching teams:', error)
        throw error
    }
}

export const getTeamById = async (id: string) => {
    try {
        const response = await fetch(`${baseURL}/teams/${id}`)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Error fetching team:', error)
        throw error
    }
}