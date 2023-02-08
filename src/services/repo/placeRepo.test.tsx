import { mockPlace1 } from '../../core/hooks/place.hook.mock';
import { PlaceStructure } from '../../types/place';
import { PlacesRepo } from './placeRepo';

describe('Given a Task Repo', () => {
    const mockData = [mockPlace1];

    const repo = new PlacesRepo();

    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockData),
        });
    });

    test('Then we can instantiate it', () => {
        expect(repo).toBeInstanceOf(PlacesRepo);
    });

    describe('When we use load method', () => {
        test('Then we received the tasks contents in the repo', async () => {
            const data = await repo.load();
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(data);
        });
        test('Then if there are NO DATA, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.load();
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use query method', () => {
        mockPlace1.id = '001';
        const id = mockData[0].id;
        test('Then, if the id is VALID, we received the place searched in the repo', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockData[0]),
            });
            const data = await repo.queryId(id);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(mockData[0]);
        });
        test('Then, if there are NOT id, we received a rejected promise', async () => {
            await expect(async () => {
                await repo.queryId('');
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });

        test('Then, if the id is NOT VALID, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 404,
                statusText: 'Not Found',
                json: jest.fn().mockRejectedValue(new Error()),
            });

            await expect(async () => {
                await repo.queryId('23');
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use create method', () => {
        test(`Then if the data are VALID, we received the task 
            created in the repo with its own new id`, async () => {
            const mockNewTaskPayload: Partial<PlaceStructure> = {
                name: 'Name 1',
                start: 'Madrid',
                finish: 'Valencia',
                distance: '2:30h',
                image: 'image',
                forKids: false,
                forDogs: true,
                away: true,
                coment: 'No coment',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockNewTaskPayload),
            });

            const data = await repo.create(mockNewTaskPayload);
            expect(data).toHaveProperty('name', mockNewTaskPayload.name);
            expect(data).toHaveProperty('start', mockNewTaskPayload.start);
            expect(data).toHaveProperty('finish', mockNewTaskPayload.finish);
            expect(data).toHaveProperty(
                'distance',
                mockNewTaskPayload.distance
            );
            expect(data).toHaveProperty('coment', mockNewTaskPayload.coment);
        });
        test(`Then if the data are NOT VALID, we received a rejected promise`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });

            await expect(async () => {
                await repo.create({});
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use update method', () => {
        test(`Then if the ID are VALID, we received the task 
            update in the repo`, async () => {
            const updatePayload: Partial<PlaceStructure> = {
                id: mockPlace1.id,
                name: 'Name 2',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(updatePayload),
            });
            const data = await repo.update(updatePayload);
            expect(data).toHaveProperty('name', updatePayload.name);
        });
        test(`Then if there are NOT ID, we received a null`, async () => {
            await expect(async () => {
                await repo.update({});
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });
        test(`Then if the ID are NOT VALID, we received a null`, async () => {
            const updatePayload: Partial<PlaceStructure> = {
                id: 'bad',
                name: 'Name 2',
            };
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.update(updatePayload);
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });

    describe('When we use delete method', () => {
        test(`Then if the ID are VALID, we received the ID 
            of the task delete in the repo`, async () => {
            const id = mockPlace1.id;
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(id),
            });
            const data = await repo.delete(id);
            expect(global.fetch).toHaveBeenCalled();
            expect(data).toBe(id);
        });
        test(`Then if there are NOT ID, we received a null`, async () => {
            await expect(async () => {
                await repo.delete('');
            }).rejects.toThrowError();
            expect(global.fetch).not.toHaveBeenCalled();
        });
        test(`Then if the ID are NOT VALID, we received a null`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.delete('bad');
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });
});
