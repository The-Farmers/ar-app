let num = 0;

function toggle() {
  num = (num + 1) % 4;
}

function getModelName() {
  switch (num) {
    case 1:
      return "treeMode";
    case 2:
      return "#tomatoModel";
    case 3:
      return "#unicornModel";
    default:
      return "#flyingSaucerModel";
  }
}
