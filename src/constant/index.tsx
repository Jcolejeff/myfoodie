import { planTypes, routePathTypes } from 'types';

const ROUTES: Record<routePathTypes, routePathTypes> = {
  '': '',
  'assets-templates': 'assets-templates',
  'create-account': 'create-account',
  'cv-profile': 'cv-profile',
  'general-forums': 'general-forums',
  about: 'about',
  'master-classes': 'master-classes',
  'online-training': 'online-training',
  'professional-forums': 'professional-forums',
  'select-plan': 'select-plan',
  'service-ad': 'service-ad',
  blogs: 'blogs',
  bootcamps: 'bootcamps',
  bts: 'bts',
  consultancy: 'consultancy',
  dashboard: 'dashboard',
  faqs: 'faqs',
  login: 'login',
  pricing: 'pricing',
  'hire-talent': 'hire-talent',
  chat: 'chat',
  logout: 'logout',
  profile: 'profile',
  settings: 'settings',
  subscriptions: 'subscriptions',
  'new-password': 'new-password',
  'reset-password': 'reset-password',
  'privacy-policy': 'privacy-policy',
  'forgot-password': 'forgot-password',
  'verify-email': 'verify-email',
  'my-assistants': 'my-assistants',
};

const PLAN_PERMISSIONS: Record<routePathTypes, planTypes> = {
  '': 'starter',
  'assets-templates': 'student',
  'create-account': 'starter',
  'cv-profile': 'master',
  'general-forums': 'student',
  'hire-talent': 'starter',
  'master-classes': 'master',
  'online-training': 'master',
  'professional-forums': 'master',
  'select-plan': 'starter',
  'service-ad': 'professional',
  about: 'starter',
  blogs: 'starter',
  bootcamps: 'master',
  bts: 'student',
  chat: 'starter',
  consultancy: 'master',
  dashboard: 'student',
  faqs: 'starter',
  login: 'starter',
  logout: 'starter',
  pricing: 'starter',
  profile: 'starter',
  settings: 'starter',
  subscriptions: 'starter',
  'new-password': 'starter',
  'reset-password': 'starter',
  'privacy-policy': 'starter',
  'forgot-password': 'starter',
  'verify-email': 'starter',
  'my-assistants': 'starter',
};

const TIMBU_KEYS = {
  BTS_ID: 'a3b42063504f4372ac9a1a6bd0f46d85',
  BLOG_ID: '696dccd73fb242448c41704b5179698f',
  IMAGE_BASE_URL: 'https://images.timbu.com',
};

const CONSTANTS = { ROUTES, PLAN_PERMISSIONS, TIMBU_KEYS };

export default CONSTANTS;
