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
    // static generateId() {
    //     const aNumbers = new Uint32Array(1);
    //     window.crypto?.getRandomValues(aNumbers);
    //     return ('000000' + aNumbers[0]).slice(-6);
    // }

    // id: string;
    isFavorite: boolean;

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
        // this.id = PlaceStructure.generateId();
        this.isFavorite = false;
    }
}
