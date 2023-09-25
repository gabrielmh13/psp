export interface IReturnTransactionDTO {
    id: number
    value: number
    description: string
    method: string
    card_number: number
    card_owner: string
    validity: Date
    verification_code: string
    created_at: Date
}