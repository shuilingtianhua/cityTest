// 本地存储工具，统一处理 JSON 序列化和 Key 管理

const PREFIX = 'city_test_'

function withPrefix(key) {
  return `${PREFIX}${key}`
}

export function setItem(key, value) {
  try {
    const fullKey = withPrefix(key)
    const toStore =
      typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(fullKey, toStore)
  } catch (error) {
    console.error('Failed to setItem in localStorage', key, error)
  }
}

export function getItem(key, defaultValue = null) {
  try {
    const fullKey = withPrefix(key)
    const raw = localStorage.getItem(fullKey)
    if (raw === null || raw === undefined) {
      return defaultValue
    }

    // 如果 defaultValue 是字符串，按纯字符串返回
    if (typeof defaultValue === 'string') {
      return raw
    }

    // 尝试 JSON 解析，解析失败则直接返回原始字符串
    try {
      return JSON.parse(raw)
    } catch {
      return raw
    }
  } catch (error) {
    console.error('Failed to getItem from localStorage', key, error)
    return defaultValue
  }
}

export function removeItem(key) {
  try {
    const fullKey = withPrefix(key)
    localStorage.removeItem(fullKey)
  } catch (error) {
    console.error('Failed to removeItem from localStorage', key, error)
  }
}

export function clearAllAppData() {
  try {
    const keysToRemove = []
    for (let i = 0; i < localStorage.length; i++) {
      const storageKey = localStorage.key(i)
      if (storageKey && storageKey.startsWith(PREFIX)) {
        keysToRemove.push(storageKey)
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k))
  } catch (error) {
    console.error('Failed to clear app data from localStorage', error)
  }
}

