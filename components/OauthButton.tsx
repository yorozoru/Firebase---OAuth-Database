"use client"
import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import handleGoogleAuth from "@/lib/firebase_auth";


export default async function OAuthButton(){
    return (
        <Button sx={{ display: 'flex', flexDirection: 'row', gap: 1, backgroundColor: '#FFC0CB' }}
        onClick={() => {handleGoogleAuth()}}
        >
                <GoogleIcon sx={{color:'white'}}/> 
                <h2 className="font-bold text-white">Login with Google</h2>
        </Button>
    )
}