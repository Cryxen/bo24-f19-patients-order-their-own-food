import { MVCDeletingError, MVCFetchingError, MVCSavingError } from '@/libs/errors/MVC-errors';
import * as messageRepo from './message.repository';


export const fetchAllMessages = async () => {
    try {
        const messagesFromDb = await messageRepo.fetchAllMessages();
        return { success: true, data: messagesFromDb.data };
    } catch (error) {
        return { success: false, error: MVCFetchingError("Messages", "service", error) };
    }
};

export const createMessage = async (title: string, room: string, message: string) => {
    try {
        const responseFromDb = await messageRepo.createMessage({
            title, room, message,
            messageID: 0
        });
        return { success: true, data: responseFromDb.data };
    } catch (error) {
        return { success: false, error: MVCSavingError("Messages", "service", error)};
    }
};

export const deleteMessage = async (messageID: number) => {
    try {
        console.log('Messaging service received deletion request from following messageID:', messageID);
        const responseFromDb = await messageRepo.deleteMessage(messageID);
        return { success: true, data: responseFromDb.data };
    } catch (error) {
        return { success: false, error: MVCDeletingError("Messages", "service", error) };
    }
};

