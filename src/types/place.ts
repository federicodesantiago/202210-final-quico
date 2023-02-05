export type PlaceType = {
    name: string;
    start: string;
    finish: string;
    distance: string;
    image: string;
    away: boolean;
    forKids: boolean;
    forDogs: boolean;
    coment: string;
    isFavorite: boolean;
};

export class PlaceStructure implements PlaceType {
    isFavorite: boolean;
    id: string;
    constructor(
        public name: string,
        public start: string,
        public finish: string,
        public distance: string,
        public image: string,
        public away: boolean,
        public forKids: boolean,
        public forDogs: boolean,
        public coment: string
    ) {
        this.isFavorite = false;
        this.id = '';
    }
}

export type PlaceCollection = {
    [key: string]: PlaceStructure;
};
