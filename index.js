var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, obj);
  delete newObject.key;
  newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
