let num = 0;

function toggle() {
  num = (num + 1) % 9;
}

function getModelName() {
  switch (num) {
    case 1:
      return "#treeModel";
    case 2:
      return "#rocketModel";
    case 3:
      return "#tomatoModel";
    case 4:
      return "#unicornModel";
    case 5:
      return "#flyingSaucerModel";
    case 6:
      return "#pagodaModel";
    case 7:
      return "#lilyPadModel";
    case 8:
      return "#shrekModel";
    default:
      return "#roseModel";
  }
}

function getModalScale() {
  switch (num) {
    case 1:
      return "0.012 0.012 0.012";
    case 2:
      return "10 10 10";
    case 3:
      return "0.05 0.05 0.05";
    case 4:
      return "0.4 0.4 0.4";
    case 5:
      return "200 200 200";
    case 6:
      return "0.18 0.18 0.18";
    case 7:
      return "1 1 1";
    case 8:
      return "5 5 5";
    default:
      return "15 15 15";
  }
}
