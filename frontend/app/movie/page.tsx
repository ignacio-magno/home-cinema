'use client'

import {useSearchParams} from 'next/navigation';

export default function Page() {
    const params = useSearchParams().get('movie');
    const url = process.env.NEXT_PUBLIC_SERVER_URL + "/movie/" + params;

    return <div className={"flex bg-[#f5f5f5] m-auto"}>
        <video controls src={url} datatype="video/mp4" className={"w-auto h-auto"}/>
    </div>
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '',
    },
    title: {
        marginBottom: '20px',
        color: '#333',
        textTransform: 'uppercase',
    },
    video: {
        width: '80%', // puedes cambiar esto dependiendo de tus necesidades
        height: 'auto',
    },
};