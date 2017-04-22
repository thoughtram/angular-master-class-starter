/**
 * Interfaces copied from the Redux/index.d.ts file... useful to avoid Typescript warnings.
 *
 *
 */
export interface Action {  type: any; }
export interface Unsubscribe { (): void; }
export interface Dispatch<S> { <A extends Action>(action: A): A; }

export interface Store<S> {
  getState(): S;
  dispatch: (action)=>void;
  subscribe(listener: () => void): Unsubscribe;
}
