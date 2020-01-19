let num = 0;

function toggle() {
  num = (num + 1) % 4;
}

function getModelName() {
  switch (num) {
    case 1:
      return "#treeModel";
    case 2:
      return "#tomatoModel";
    case 3:
      return "#unicornModel";
    default:
      return "#flyingSaucerModel";
  }
}

function getModalScale() {
  switch (num) {
    case 1:
      return "0.02 0.02 0.02";
    case 2:
      return "0.1 0.1 0.1";
    case 3:
      return "1 1 1";
    default:
      return "400 400 40";
  }
}
