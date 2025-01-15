import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlM2IzOGRjNy1kN2M1LTRkNzQtYjFiZi02ZjgyZGIzNjgyZGUiLCJpYXQiOjE3MzY5NTAxOTB9.KdfUd0-TJN7OICDh8HQHMVaVmlXpBz5dki94UmVqe90`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }

}