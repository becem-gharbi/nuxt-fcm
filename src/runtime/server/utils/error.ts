import { ZodError } from 'zod'
import { createError, H3Error } from 'h3'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleError(error: any) {
  if (import.meta.dev) {
    console.error(error)
  }

  const h3Error = new H3Error('server-error')

  if (error instanceof ZodError) {
    h3Error.message = error.issues[0].path + ' | ' + error.issues[0].message
    h3Error.statusCode = 400
  }
  else if (error.message === 'unauthorized') {
    h3Error.message = 'unauthorized'
    h3Error.statusCode = 401
  }

  throw createError(h3Error)
}
