import { PlaceStructure } from '../../types/place';
import { Repository } from '../../types/placeRepo';

const invalidIdError = new Error('Invalid ID');

export class PlacesRepo implements Repository<PlaceStructure> {
    constructor(
        private url = 'https://stop-y-go-default-rtdb.europe-west1.firebasedatabase.app/places.json/'
    ) {
        //
    }

    async load(): Promise<PlaceStructure[]> {
        const resp = await fetch(this.url);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        const result = await resp.json();
        return Object.values(result);
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
        const resp = await fetch(this.url, {
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
        if (!payload.name) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + payload.name, {
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
    async delete(
        name: PlaceStructure['name']
    ): Promise<PlaceStructure['name']> {
        if (!name) return Promise.reject(invalidIdError);
        const resp = await fetch(this.url + '/' + name + '.json', {
            method: 'DELETE',
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return name;
    }
}
