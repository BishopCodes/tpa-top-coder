export interface Log {
  (message: unknown): void;
}

export interface Logger {
  info: Log;
  warn: Log;
  debug: Log;
  error: Log;
}

const { NODE_ENV } = process.env;

const info: Log = (message) => (NODE_ENV !== 'production') && console.info(message);
const warn: Log = (message) => (NODE_ENV !== 'production') && console.warn(message);
const debug: Log = (message) => (NODE_ENV !== 'production') && console.debug(message);
const error: Log = (message) => console.error(message);

const LoggerInstance: Logger = {
  info,
  warn,
  debug,
  error,
};

export default LoggerInstance;
