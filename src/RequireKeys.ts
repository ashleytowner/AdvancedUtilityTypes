export type RequireKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
