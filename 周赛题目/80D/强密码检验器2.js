function strongPasswordCheckerII(password) {
    if (password.length < 8) return false
    if (!/[a-z]/.test(password)) return false
    if (!/[A-Z]/.test(password)) return false
    if (!/[0-9]/.test(password)) return false
    if (!/[!@#$%^&*()+-]/.test(password)) return false
    const arr = password.split('')
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) return false
    }
    return true
}