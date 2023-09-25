import { transactions as rawTransactions } from "@prisma/client";
import { IReturnTransactionDTO } from "../../../dtos/IReturnTransactionDTO";

export class PrismaTransactionsMapper {
    static toDomain(raw: rawTransactions): IReturnTransactionDTO {
        return {
            id: raw.id,
            value: raw.value,
            description: raw.description,
            method: raw.method,
            card_number: raw.card_number,
            card_owner: raw.card_owner,
            validity: raw.validity,
            verification_code: raw.verification_code,
            created_at: raw.created_at
        }
    }
}