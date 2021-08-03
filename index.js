// findMatching - This function takes an array of drivers' names and a string
// as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(arr, match) {
  const matches = arr.filter(name => name.toLowerCase() == match.toLowerCase())
  return matches
}

// fuzzyMatch - This function takes an array of drivers' names and a string
// as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(arr, match) {
  const matches = arr.filter(name => name.toLowerCase().startsWith(match.toLowerCase()))
  return matches
}

// matchName - This function takes an array of driver objects and a string as
// arguments. Each driver object has two properties: name and hometown. The function should return each
// element whose name property matches the provided string argument.

function matchName(arr, match) {
  const drivers = arr.filter(driver => driver.name.toLowerCase() == match.toLowerCase())
  return drivers
}
