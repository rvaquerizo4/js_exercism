export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  resize = (newSize) => {
    let widthRemaining = this.screenSize.width - this.position.x;
    let heightRemaining = this.screenSize.height - this.position.y;
    if (newSize.width < 1) {
      this.size.width = 1;
    } else if (newSize.width > widthRemaining) {
      this.size.width = widthRemaining;
    } else {
      this.size.width = newSize.width;
    }
    if (newSize.height < 1) {
      this.size.height = 1;
    } else if (newSize.height > heightRemaining) {
      this.size.height = heightRemaining;
    } else {
      this.size.height = newSize.height;
    }
  };
  move = (newPosition) => {
    if (newPosition.x < 0) newPosition.x = 0;
    if (newPosition.y < 0) newPosition.y = 0;
    if (newPosition.x + this.size.width > this.screenSize.width)
      newPosition.x = this.screenSize.width - this.size.width;
    if (newPosition.y + this.size.height > this.screenSize.height)
      newPosition.y = this.screenSize.height - this.size.height;
    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
  };
}
export function changeWindow(ProgramWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  ProgramWindow.resize(newSize);
  ProgramWindow.move(newPosition);
  return ProgramWindow;
}
