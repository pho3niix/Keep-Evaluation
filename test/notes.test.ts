import { createMocks, createResponse } from 'node-mocks-http';
import HandleNotes from '../pages/api/notes/index';

describe('/api/notes Get list - Red Scenarios', () => {
    test('Should return an error when pass a string parameter as page number.', async () => {
        const Params = {
            PageNumber: 'n',
            ItemsPerPage: 10
        }

        const { req, res } = createMocks({
            method: 'GET',
            query: Params
        });

        await HandleNotes(req, res);

        expect(res.statusCode).toBe(400);

        expect(JSON.parse(res._getData({}))).toStrictEqual({
            name: 'CustomError',
            statusCode: 400,
            message: 'The page number must be a number greater than 0.'
        });
    })

    test('Should return an error when pass a string parameter as items per page', async () => {
        const Params = {
            PageNumber: 1,
            ItemsPerPage: 'x'
        }

        const { req, res } = createMocks({
            method: 'GET',
            query: Params
        });

        await HandleNotes(req, res);

        expect(res.statusCode).toBe(400);

        expect(JSON.parse(res._getData({}))).toStrictEqual({
            name: 'CustomError',
            statusCode: 400,
            message: 'The items per page number must be a number greater than 0.'
        })
    })

    test('Should return an error when pass a page number greater than total pages', async () => {
        const Params = {
            PageNumber: 4,
            ItemsPerPage: 10
        }

        const { req, res } = createMocks({
            method: 'GET',
            query: Params
        });

        await HandleNotes(req, res);

        expect(res.statusCode).toBe(400)

        expect(JSON.parse(res._getData({}))).toStrictEqual({
            name: 'CustomError',
            statusCode: 400,
            message: 'The page number entered exceeds the total number of pages.'
        })
    })
})

describe('/api/notes Get Detail - Red Scenarios', () => {
    test('Should return error when pass invalid UUID parameter', async () => {
        const Params = {
            NoteId: '1'
        }

        const { req, res } = createMocks({
            method: 'GET',
            query: Params
        });

        await HandleNotes(req, res);

        expect(res.statusCode).toBe(409);

        expect(JSON.parse(res._getData({}))).toStrictEqual({
            name: 'CustomError',
            statusCode: 409,
            message: 'invalid input syntax for type uuid: "1"'
        })
    })

    test('Should return error when specific Note id does not exists', async () => {
        const Params = {
            NoteId: '460c3764-d456-47c2-b980-4c6cb9cb3c8e'
        }

        const { req, res } = createMocks({
            method: 'GET',
            query: Params
        });

        await HandleNotes(req, res);

        expect(res.statusCode).toBe(404);

        expect(JSON.parse(res._getData({}))).toStrictEqual({
            name: 'CustomError',
            statusCode: 404,
            message: 'The specific note does not exists.'
        })
    })

    test('Should return error when pass empty value as UUID', async () => {
        const Params = {
            NoteId: ''
        }

        const { req, res } = createMocks({
            method: 'GET',
            query: Params
        });

        await HandleNotes(req, res);

        expect(res.statusCode).toBe(409);

        expect(JSON.parse(res._getData({}))).toStrictEqual({
            name: 'CustomError',
            statusCode: 409,
            message: 'Please, input an UUID value for Note Id.'
        })
    })
})