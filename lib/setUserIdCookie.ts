"use server"
import { cookies } from 'next/headers';

export async function setUserIdCookie(uId: string) {
    const cookieStore = cookies();
    cookieStore.set({
        name: 'userId',
        value: uId,
        httpOnly: true,
        path: '/',
    });
}