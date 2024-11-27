"use server"
import { cookies } from 'next/headers';
import getUserId from './getUserId';

export async function checkUserCookie() {
    const cookieStore = cookies();
    const userIdCookie = cookieStore.get('userId');

    if (userIdCookie) {
        return await getUserId(userIdCookie.value);
    }
    
    return null;
}