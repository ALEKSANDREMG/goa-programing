const returnPromise = (bool) => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve("success")
    } else {
      reject("failure")
    }
  })
}

const asyncFunc = async () => {
  const result = await returnPromise(true)
  console.log(result)
}

asyncFunc()
