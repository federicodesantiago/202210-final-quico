import { PlaceStructure } from '../../types/place';
import { Repository } from '../../types/placeRepo';

const invalidIdError = new Error('Invalid ID');
const urlEnding = '.json/';

export class PlacesRepo implements Repository<PlaceStructure> {
    constructor(
        private url = 'https://stop-y-go-default-rtdb.europe-west1.firebasedatabase.app/places/'
    ) {
        //
    }

    async load(): Promise<PlaceStructure[]> {
        const resp = await fetch(this.url + urlEnding);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        const result = await resp.json();
        return Object.keys(result).map((key) => ({
            ...result[key],
            id: key,
        }));
    }

    async queryId(id: string): Promise<PlaceStructure> {
        if (!id || typeof id !== 'string')
            return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + id);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }

    async create(payload: Partial<PlaceStructure>): Promise<PlaceStructure> {
        const resp = await fetch(this.url + urlEnding, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
    async update(payload: Partial<PlaceStructure>): Promise<PlaceStructure> {
        if (!payload.id) return Promise.reject(invalidIdError);
        this.url =
            'https://stop-y-go-default-rtdb.europe-west1.firebasedatabase.app/places/';
        const resp = await fetch(this.url + payload.id + urlEnding, {
            method: 'PATCH',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
    async delete(id: PlaceStructure['id']): Promise<PlaceStructure['id']> {
        if (!id) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + id + urlEnding, {
            method: 'DELETE',
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return id;
    }
}
