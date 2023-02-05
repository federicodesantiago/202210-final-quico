export interface Repository<T> {
    login: () => Promise<T>;
    logout: () => Promise<T>;
}
