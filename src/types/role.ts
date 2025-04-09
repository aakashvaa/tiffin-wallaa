import { ROLE } from '@/constant';

export type RoleType = (typeof ROLE)[keyof typeof ROLE];
export { ROLE };
