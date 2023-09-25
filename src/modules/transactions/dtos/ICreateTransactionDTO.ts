export interface ICreateTransactionDTO {
    value: number
    description: string
    method: string
    card_number: number
    card_owner: string
    validity: string
    verification_code: string
}