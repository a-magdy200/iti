class Shape {
  constructor(props) {
    const {x, y, shape} = props;
    this._x = x;
    this._y = y;
    this._shape = shape;
    this._path = new Path2D();
    this._id = Math.ceil(Math.random() * 999999999);
    this._shapeProps = [];
    this._shapeVars = [];
    this._highlighted = false;
    this._color = this.generateColor();
    this._highlightColor = this.generateColor();
  }

  get highlightColor() {
    return this._highlightColor;
  }

  set highlightColor(value) {
    this._highlightColor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  generateColor() {
    let hexSet = "0123456789ABCDEF";
    let finalHexString = "#";
    for (let i = 0; i < 6; i++) {
      finalHexString += hexSet[Math.floor(Math.random() * 16)];
    }
    return finalHexString;
  }

  get highlighted() {
    return this._highlighted;
  }

  set highlighted(value) {
    this._highlighted = value;
  }

  get shapeVars() {
    return this._shapeVars;
  }

  set shapeVars(value) {
    this._shapeVars = [].concat(value);
  }

  get shapeProps() {
    return this._shapeProps;
  }

  set shapeProps(value) {
    this._shapeProps = [].concat(value);
  }

  get id() {
    return this._id;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    this._x = value;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  get shape() {
    return this._shape;
  }

  set shape(value) {
    this._shape = value;
  }

  get area() {
    return 0;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  get circumference() {
    return 0;
  }

  draw(context) {

  }

  showShapeProps(shapeProps) {
    shapeProps.innerHTML = '';
    this.shapeProps.forEach((prop) => {
      shapeProps.innerHTML += `<div class="shape-prop">
                                <span>${prop}</span>
                                <span>${this[prop]}</span>
                              </div>`;
    });
  }

  showEditProps(shapeEdit) {
    shapeEdit.innerHTML = '';
    shapeEdit.innerHTML += `<form>`;
    this.shapeVars.forEach(variable => {
      shapeEdit.innerHTML += `<div class="form-group">
                                <label for="${variable}">${variable}</label>
                                <input autocomplete="off" id="${variable}" type="${variable.toLowerCase().search('color') === -1 ? 'text' : 'color'}" name="${variable}" placeholder="${variable} value" value="${this[variable]}" />
                               </div>`;
    });
    //shapeEdit.innerHTML += `<button id="update" data-id="${this.id}">Update</button>`;
    shapeEdit.innerHTML += `</form>`;
  }

  edit(shapeEdit, shapeProps) {
    this.showShapeProps(shapeProps);
    this.showEditProps(shapeEdit);
  }

  log() {
    this.shapeProps.forEach((prop) => {
      console.log(`This ${this._shape}'s ${prop}: ${this[prop]}`);
    });
  }
}

export default Shape;
