import {cryptoAssets, cryptoData} from './data'

export function fakeFetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 1000)
  })
}

export function fetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets)
    }, 1000)
  })
}

// EXSAMPLE PROMISE


// const makeDough = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Тісто готове')
//     }, 1000)
//   })
// }

// const addIngredients = (data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${data} -> Інгредієнти додані`)
//     }, 1000)
//   })
// }

// const bakePizza = (data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${data} -> Піца готова!`)
//     }, 2000)
//   })
// }

// makeDough().then((result) => {
//   console.lof(result)
//   return addIngredients(result)
// }).then((result) => {
//   console.log(result)
//   return bakePizza(result)
// }).then((result) => {
//   console.log(result)
//   console.log('Смачного!')
// }).catch((error) => {
//   console.error('Помилка приготування піци:', error)
// }).finally(() => {
//   console.log('Процес приготування піци завершено.')
// })