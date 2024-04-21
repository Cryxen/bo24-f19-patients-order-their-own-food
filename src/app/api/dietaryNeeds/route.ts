import * as dietaryneedsController from '@/features/DietaryNeeds/DietaryNeeds.controller'

export const GET = async () => {
    return await dietaryneedsController.fetchAllDietaryNeeds()
}