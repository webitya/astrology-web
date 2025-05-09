// This is a mock authentication service
// In a real application, you would use a proper authentication system

let isAuthenticated = false

// Simulating environment variables that would be in .env.local
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "aditya123"

export async function authenticate(username, password) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    isAuthenticated = true
    return { success: true }
  }

  return { success: false }
}

export async function checkAuth() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return isAuthenticated
}

export async function logout() {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  isAuthenticated = false
  return { success: true }
}
