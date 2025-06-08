import authHandler from './auth';
import { clubHandlers } from './club';

const handlers = [...authHandler, ...clubHandlers];
export default handlers;
