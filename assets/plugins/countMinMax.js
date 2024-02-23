var adultsElement = document.getElementById('adults');
var childrenElement = document.getElementById('children');
var adultsCount = 4;
var childrenCount = 4;
const minCount = 0;
const maxCount = 100;

function updateCount(element, count) {
  element.textContent = count;
}

function increaseCount(type) {
  if (type === 'adults' && adultsCount < maxCount) {
    adultsCount++;
    updateCount(adultsElement, adultsCount);
  } else if (type === 'children' && childrenCount < maxCount) {
    childrenCount++;
    updateCount(childrenElement, childrenCount);
  }
}

function decreaseCount(type) {
  if (type === 'adults' && adultsCount > minCount) {
    adultsCount--;
    updateCount(adultsElement, adultsCount);
  } else if (type === 'children' && childrenCount > minCount) {
    childrenCount--;
    updateCount(childrenElement, childrenCount);
  }
}