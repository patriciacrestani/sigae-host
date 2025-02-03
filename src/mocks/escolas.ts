import { http, HttpResponse } from 'msw';

export const EscolasMock = [
    http.get('https://example.com/escolas/total', () => {
        return HttpResponse.json(
            3,
            { status: 200 }
        );
    }),
];