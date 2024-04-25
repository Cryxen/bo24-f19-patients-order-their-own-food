import { NextRequest, NextResponse } from 'next/server';
import * as messageController from '@/features/messages/message.controller';

interface ApiResponse {
    success: boolean;
    status: number;
    message?: string;
    error?: string;
}

export async function POST(req: NextRequest) {
    console.log("Variable passed through API:", req);
    return await messageController.createMessage(req);
}

export async function GET(req: NextRequest) {
    return await messageController.fetchAllMessages(req);
}

export async function DELETE(req: NextRequest) {
    console.log("Variable passed through API:", req);
    return await messageController.deleteMessage(req);
}



