import * as messageRepo from './message.repository';


export const fetchAllMessages = async () => {
    try {
        const messagesFromDb = await messageRepo.fetchAllMessages();
        return { success: true, data: messagesFromDb.data };
    } catch (error) {
        return { success: false, error: "Something went wrong fetching messages from the database in the service" };
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
        return { success: false, error: "Failed to create the message in the service" };
    }
};

export const deleteMessage = async (messageID: number) => {
    try {
        console.log('Messaging service received deletion request from following messageID:', messageID);
        const responseFromDb = await messageRepo.deleteMessage(messageID);
        return { success: true, data: responseFromDb.data };
    } catch (error) {
        return { success: false, error: `Something went wrong deleting message with ID ${messageID} in service` };
    }
};

