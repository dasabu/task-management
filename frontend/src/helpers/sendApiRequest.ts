type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

// High order function to get the correct configuration for each method
function returnCorrectRequest(
  method: Method,
  data: unknown
): RequestInit {
  if (method === 'GET') {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  } else {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
  }
}

export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {}
): Promise<T> {
  const response = await fetch(
    url,
    returnCorrectRequest(method, data)
  )

  if (!response.ok) {
    const message = `An error occurred: ${response.status}`
    throw new Error(message)
  }

  return await response.json()
}
