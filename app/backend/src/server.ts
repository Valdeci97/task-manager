import 'dotenv/config';
import { App } from './app';

new App().start(Number(process.env.APP_PORT));
