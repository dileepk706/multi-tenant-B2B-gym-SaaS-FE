export const HOST_API = import.meta.env.VITE_HOST_API || 'http://localhost:3000/api';
export const PATH_AFTER_LOGIN = '/';

export const IS_PROD = import.meta.env.MODE === 'production';
export const IS_DEV = import.meta.env.MODE === 'development';
export const NODE_ENV = import.meta.env.MODE;

export const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME;
