export interface Repository<T> {
    url: string;
    load: () => Promise<T>;
}
