// This is a mock authentication system - in a real app, you would use a proper auth system
let isAuthenticated = false

export async function login(username: string, password: string): Promise<boolean> {
  // In a real app, this would validate against a database
  // For demo purposes, accept any non-empty username/password
  if (username && password) {
    isAuthenticated = true
    return true
  }

  return false
}

export async function logout(): Promise<void> {
  isAuthenticated = false
  return Promise.resolve()
}

export async function checkAuth(): Promise<boolean> {
  // In a real app, this would check a session or token
  return isAuthenticated
}
