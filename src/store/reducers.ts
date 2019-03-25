import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [
    {
      label: 'Eat Pizza',
      complete: false
    }
  ]
};

export function reducer(
  state = initialState,
  action: {type: string; payload: any}) {
    debugger;

    switch (action.type) {
      case fromActions.ADD_TODO: {
        const todo = action.payload;
        const data = [...state.data, todo];
        return {
          ...state,
          data,
        };
      }
      case fromActions.REMOVE_TODO: {
        debugger;
        const data = state.data.filter(res => {
          return res.label != action.payload.label
        });
        debugger;
        return {
          ...state,
          data,
        };
      }
    }

    return state;
}
