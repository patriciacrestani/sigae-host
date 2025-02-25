import { http, HttpResponse } from 'msw';

export const EventosMock = [
    http.get('https://example.com/eventos/total', () => {
        return HttpResponse.json(
            3,
            { status: 200 }
        );
    }),
    
    http.get('/api/eventos', () => {
        return HttpResponse.json(
            3,
            { status: 200 }
        );
    }),
];