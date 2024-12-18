

import { MVCDeletingError, MVCFetchingError, MVCSavingError } from "@/libs/errors/MVC-errors";
import prisma from "@/libs/utils/prisma"


type Message = {
    messageID?: number;
    title: string;
    room: string;
    message: string;
};

export const fetchAllMessages = async () => {
    try {
        const messagesFromDb = await prisma.message.findMany();
        return { success: true, data: messagesFromDb };
    } catch (error) {
        return { success: false, error: MVCFetchingError("Messages", "repository", error) };
    }
};

export const createMessage = async (message: Message) => {
    try {
        const responseFromDb = await prisma.message.create({
            data: {
                title: message.title,
                room: message.room,
                message: message.message
            }
        });
        return { success: true, data: responseFromDb };
    } catch (error) {
        return { success: false, error: MVCSavingError("Messages", "repository", error) };
    }
};

export const deleteMessage = async (messageID: number) => {
    try {
        const responseFromDb = await prisma.message.delete({
            where: { messageID: messageID }
        });
        return { success: true, data: responseFromDb };
    } catch (error) {
        return { success: false, error: MVCDeletingError("Messages", "repository", error) };
    }
};
