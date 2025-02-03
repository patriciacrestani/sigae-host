import { http, HttpResponse } from 'msw';

export const PessoasMock = [
    http.get('https://example.com/pessoas/total', () => {
        return HttpResponse.json(
            10,
            { status: 200 }
        );
    }),
];