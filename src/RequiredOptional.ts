import { RequireKeys } from './RequireKeys';
import { OptionalKeys } from './OptionalKeys';


export type RequiredOptional<T, R extends keyof T, O extends keyof T> = 
  Pick<RequireKeys<T, R>, R>
  & Pick<OptionalKeys<T, O>, O>
  & Omit<T, O | R>;

