export function getSessionStorage (key: string): string | null {
  return window.sessionStorage.getItem(key)
}

export function setSessionStorage(key: string, value: string): void {
  window.sessionStorage.setItem(key, value)
}

export function isHaveSessionStorage(key: string): boolean {
  if (window.sessionStorage.getItem(key) === null) {
    return false
  }
  return true
}

export function removeSessionStorage(key: string): void {
  window.sessionStorage.removeItem(key)
}

export function clearSessionStorage(): void {
  window.sessionStorage.clear()
}
