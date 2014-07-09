  moveForward: function () {
    this.advance('forward');
  },
  moveBackward: function () {
    this.advance('backward');
  },
  advance: function (direction) {
    direction = (direction === 'forward') ? 1 : -1;
    var formerPosition = [
      this.position[0],
      this.position[1]
    ];
    var increment = this.increments[this.orientation];
    this.position = [
      (this.position[0] + increment[0] * direction) % Grid.sizeX,
      (this.position[1] + increment[1] * direction) % Grid.sizeY
    ];
    if (this.position[0] < 0) {
      this.position[0] = Grid.sizeX + this.position[0];
    }
    if (this.position[1] < 0) {
      this.position[1] = Grid.sizeY + this.position[1];
    }
    if (Grid.thereIsObstacle(this.position[0], this.position[1])) {
      this.position = formerPosition;
    }
  },
  increments: {
    n: [0, 1],
    e: [1, 0],
    s: [0, -1],
    w: [-1, 0]
  },