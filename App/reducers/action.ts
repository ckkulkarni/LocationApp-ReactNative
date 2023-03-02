import { Action } from 'redux';

export const ADD_LOCATION = 'ADD_LOCATION';

export interface LocationAction extends Action {
  type: typeof ADD_LOCATION;
  payload: any;
}

export const addLocation = (location: any): LocationAction => ({
  type: ADD_LOCATION,
  payload: location,
});
