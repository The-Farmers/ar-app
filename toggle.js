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
    case 4:
      return "#flyingSaucerModel";
    case 5:
      return "#pagodaModel"
    case 6:
      return "#lilyPadModel"
    case 7:
      return "#shrekModel"
    default:
      return "roseModel"
  }
}

function getModalScale() {
  switch (num) {
    case 1:
      return "0.012 0.012 0.012";
    case 2:
      return "0.05 0.05 0.05";
    case 3:
      return "0.4 0.4 0.4";
    case 4:
      return "200 200 200";
    case 5:
      return "0.18 0.18 0.18"
    case 6:
      return "1 1 1"
    case 7:
      return "5 5 5"
    default:
      return "1 1 1"
  }
}
