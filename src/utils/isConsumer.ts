import { ROLE } from '@/constant';
import { RoleType } from '@/types/role';

function isConsumer(role: RoleType) {
  return role === ROLE.CONSUMER;
}

function isAdmin(role: RoleType) {
  return role === ROLE.ADMIN;
}
