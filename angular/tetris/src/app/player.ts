export interface IPlayer{
    id?: number,
    name: string,
    email: string,
    best_result: number,
    time_played: number,
    created_at?: Date,
    updated_at?: Date,
}