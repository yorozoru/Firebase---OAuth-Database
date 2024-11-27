"use server"
import { redirect } from 'next/navigation';
import { readDB, writeDB } from './database_functions';
import { setUserIdCookie } from './setUserIdCookie';

export default async function getUserId(uId: string) {
    try {
        const userData = await readDB(uId);
        
        if (!userData) {
            await writeDB(uId);
        }

        await setUserIdCookie(uId);
        console.log('User processed:', uId);
        redirect('/results');
    } catch (error) {
        console.error('Error processing user:', error);
        throw error;
    }
}