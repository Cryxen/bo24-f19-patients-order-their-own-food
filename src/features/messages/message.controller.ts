import { NextRequest, NextResponse } from 'next/server';
import * as messageService from './message.service';

export const createMessage = async (req: NextRequest) => {
    try {
        if (req.body === null) {
            throw new Error('Request body is null');
        }
        
        const bodyString = await req.text();

        const { title, room, message } = JSON.parse(bodyString);

        const result = await messageService.createMessage(title, room, message);

        return NextResponse.json({
            status: 201,
            success: true,
            data: result,
            error: null
        });
    } catch (error) {
        console.error('Error creating message:', error);
        return NextResponse.json({
            status: 500,
            success: false,
            data: null,
            error: 'An error occurred while creating the message'
        });
    }
};

export const fetchAllMessages = async (req: NextRequest) => {
    try {
        const result = await messageService.fetchAllMessages();
        return NextResponse.json({
            status: 200,
            success: true,
            data: result.data,
            error: null
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
        return NextResponse.json({
            status: 500,
            success: false,
            data: null,
            error: 'An error occurred while fetching messages'
        });
    }
};

export const deleteMessage = async (req: NextRequest) => {
    try {
        const messageID = req.nextUrl.searchParams.get('messageID');

        console.log('Controller received messageID:', messageID);

        if (!messageID) {
            return NextResponse.json({
                success: false,
                status: 400,
                error: "Missing messageID parameter in the request URL"
            });
        }

        const result = await messageService.deleteMessage(parseInt(messageID));

        return NextResponse.json({
            status: 200,
            success: result.success,
            data: result.data,
            error: result.error
        });
    } catch (error) {
        console.error('Error deleting message:', error);
        return NextResponse.json({
            status: 500,
            success: false,
            data: null,
            error: 'An error occurred while deleting the message'
        });
    }
};





