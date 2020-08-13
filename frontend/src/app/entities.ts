export interface Location {
    id: string,
    name: string,
    rumors: string,
    cost: number,
    currentLocation: boolean,
    canTravelHere: boolean
}

export interface Event {
    id: string,
    title: string,
    progression: number,
    goal: number,
    cost: number,
    reward: string
}