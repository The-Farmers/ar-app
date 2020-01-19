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
      return "0.1 0.1 0.1";
    case 2:
      return "10 10 10";
    case 3:
      return "0.3 0.3 0.3";
    default:
      return "300 300 300";
  }
}
