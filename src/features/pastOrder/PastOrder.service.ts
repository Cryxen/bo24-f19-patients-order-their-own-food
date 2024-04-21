import { MVCSavingError } from '@/libs/errors/MVC-errors'
import * as pastOrderRepository from './PastOrder.repository'
import { PastOrder } from './types'



export const savePastOrder = async (pastOrder: PastOrder) => {

    try {
        const responseFromDb = await pastOrderRepository.savePastOrder(pastOrder)
        return ({ success: responseFromDb.success, data: responseFromDb.data, error: responseFromDb.error })
    } catch (error) {
        return ({ success: false, error: MVCSavingError("past order", "service", error) })
    }
}