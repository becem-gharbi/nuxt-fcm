import type { H3Event } from 'h3'
import type { FcmContext, Entity, Permission } from '../../types'

export function setPermissions(
  event: H3Event,
  permissions: FcmContext['permissions'],
) {
  event.context.fcm ||= {}
  event.context.fcm.permissions = permissions
}

export function checkPermission(
  event: H3Event,
  entity: Entity,
  permission: Permission,
) {
  if (
    !event.context.fcm?.permissions[entity]
    || !event.context.fcm?.permissions[entity][permission]
  ) {
    throw new Error('unauthorized')
  }
}
