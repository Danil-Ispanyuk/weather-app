import { Middleware, Reducer } from "redux";

export interface ApiEntities<
  R extends Reducer = Reducer,
  M extends Middleware = Middleware
> {
  reducers: Record<string, R>;
  middlewares: M[];
}

export interface ApiEntity<
  R extends Reducer = Reducer,
  M extends Middleware = Middleware
> {
  reducerPath: string;
  reducer: R;
  middleware: M;
}
