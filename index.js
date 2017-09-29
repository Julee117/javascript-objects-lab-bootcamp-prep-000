var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
}

function deleteFromObjectByKey(object, key) {
  var newObject = object;
  delete newObject.key;
  newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  object; 
}
