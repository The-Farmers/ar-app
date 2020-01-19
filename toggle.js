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
      return "0.025 0.025 0.025";
    case 2:
      return "0.07 0.07 0.07";
    case 3:
      return "1.3 1.3 1.3";
    default:
      return "350 350 350";
  }
}
