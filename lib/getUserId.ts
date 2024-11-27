"use server"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { readDB, writeDB } from './database_functions';

export default async function getUserId(uId: string) {
    try {
        const userData = await readDB(uId);
        
        if (!userData) {
            await writeDB(uId);

        }
        const cookieStore = cookies();
        cookieStore.set({
            name: 'userId',
            value: uId,
            httpOnly: true,
            path: '/',
        });


        console.log('User processed:', uId);
        redirect('/results');
    } catch (error) {
        console.error('Error processing user:', error);
        throw error;
    }
}