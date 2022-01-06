import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'ROLES';
export const ROLE_USER = 'USER';
export const ROLE_ADMIN = 'ADMIN';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);