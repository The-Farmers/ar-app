let num = 0;

function toggle() {
  num = num % 3;
}

function getModelName() {
  switch (num) {
    case 0:
      return "#unicornModel";
    case 1:
      return "#tomatoModel";
    case 2:
      return "#treeModel";
    default:
      return "#flyingSaucerModel";
  }
}
