function cloneDeep(source, hash = new WeakMap()) {
  if(!isObject(source) || source === null) {
    return source
  } 
  if(source instanceof Date) {
    return new Date(source)
  }
  if(source instanceof RegExp) {
    return new RegExp(source)
  }
  if(hash.get(source)) {
    return hash.get(source)
  }
  const target = Array.isArray(source) ? [] : {}
  hash.set(source, target)
  for(let key in source) {
    if(Object.prototype.hasOwnProperty.call(source, key)) {
      if(isObject(source[key])) {
        target[key] = cloneDeep(source[key], hash)
      } else {
        target[key] = source[key]
      }
    }

  }
  return target
}
function isObject(source) {
  return typeof source === 'object' && source !== null
}