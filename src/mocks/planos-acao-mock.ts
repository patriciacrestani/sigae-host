import { http, HttpResponse } from 'msw';

export const PlanoAcaoMock = [
    http.get('https://example.com/plano-acao/total', () => {
        return HttpResponse.json(
            2,
            { status: 200 }
        );
    }),
];