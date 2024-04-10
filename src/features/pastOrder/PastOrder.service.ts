import * as pastOrderRepository from './PastOrder.repository'
import { PastOrder } from './types'

export const savePastOrder = async (pastOrder: PastOrder) => {

    try {
        const responseFromDb = await pastOrderRepository.savePastOrder(pastOrder)
        return ({ success: responseFromDb.success, data: responseFromDb.data, error: responseFromDb.error })
    } catch (error) {
        return ({success: false, error: "Something went wrong saving past order to db in service " + error})
    }
}