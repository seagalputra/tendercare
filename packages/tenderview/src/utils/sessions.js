const sessionStorageName = 'tendercare'

const isLoggedIn = () => localStorage.getItem(sessionStorageName)

const storeToken = token => {
  localStorage.setItem(sessionStorageName, token)
}

export { isLoggedIn, storeToken }
