class Todo {
  constructor({_id = Math.ceil(Math.random() * 999999999), _isDone = false, _title = ''} = {}) {
    this._id = _id;
    this._isDone = _isDone;
    this._title = _title;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get isDone() {
    return this._isDone;
  }

  set isDone(value) {
    this._isDone = value;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }
}
export default Todo;
