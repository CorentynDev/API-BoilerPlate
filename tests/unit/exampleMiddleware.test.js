// Import du middleware à tester
const sanitizeMiddleware = require('../../src/middlewares/sanitizeMiddleware');

describe('SanitizeMiddleware Unit Tests', () => {
    let req, res, next;

    beforeEach(() => {
        req = {
            body: { username: '<script>alert("xss")</script>', password: '123456' },
            query: { search: '<img src="x" onerror="alert(1)">' },
            params: { id: '<iframe src="http://malicious.com"></iframe>' },
        }; // Mock de req
        res = {}; // Mock de res
        next = jest.fn(); // Mock de next
    });

    it('should sanitize req.body, req.query, and req.params', () => {
        sanitizeMiddleware(req, res, next);

        // Vérifie que les données dangereuses ont été nettoyées
        expect(req.body.username).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
        expect(req.body.password).toBe('123456');
        expect(req.query.search).toBe('&lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt;');
        expect(req.params.id).toBe('&lt;iframe src=&quot;http://malicious.com&quot;&gt;&lt;/iframe&gt;');

        // Vérifie que next() a été appelé
        expect(next).toHaveBeenCalled();
    });

    it('should handle empty req.body, req.query, and req.params', () => {
        req = {}; // Cas où les objets sont vides

        sanitizeMiddleware(req, res, next);

        expect(req.body).toEqual({});
        expect(req.query).toEqual({});
        expect(req.params).toEqual({});
        expect(next).toHaveBeenCalled();
    });
});
