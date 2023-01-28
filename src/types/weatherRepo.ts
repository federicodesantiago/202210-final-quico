export interface Repository<T> {
    url: string;
    load: () => Promise<T>;
    create: (payload: Partial<T>) => Promise<T>;
}
