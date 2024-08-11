export function omitUndefined(data) {
  const res = {}
  const keys = Object.keys(data)

  for (let i = 0, len = keys.length; i < len; i++) {
    if (data[keys[i]] !== undefined) res[keys[i]] = data[keys[i]]
  }

  return res
}
