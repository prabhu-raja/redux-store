export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };


  constructor(reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  dispatch(objAction) {
    debugger;
    this.reduce(this.state, objAction);
    // console.log('11', this.state);
    // /*
    // this.state = {
    //   ...this.state,
    //   todos: [...this.state.todos, objAction.payload]
    // };
    // */
    // this.state = {
    //   todos: [...this.state.todos, objAction.payload]
    // };
    // console.log('22', this.state);
  }

  private reduce(ste, axn) {
    const newState = {};
    for (const prop in this.reducers) {
      // ? newState.todos = this.reducers.todos();
      newState[prop] = this.reducers[prop](ste, axn);
    }
    console.log('from reduce', newState);
    return newState;
  }
}
