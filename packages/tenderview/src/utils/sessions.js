const sessionStorageName = 'tendercare'

const isLoggedIn = () => localStorage.getItem(sessionStorageName)

const storeToken = token => {
  localStorage.setItem(sessionStorageName, token)
}

const clearToken = () => {
  localStorage.removeItem(sessionStorageName)
}

export { isLoggedIn, storeToken, clearToken }
