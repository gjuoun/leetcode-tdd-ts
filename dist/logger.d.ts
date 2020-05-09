import winston from 'winston';
declare class Logger {
    constructor();
    getFormat(label: string, colorize: boolean): import("logform").Format;
    getConsoleLogger(label: string, level: LOGGING_LEVEL): winston.Logger;
    getFileLogger(label: string, level: LOGGING_LEVEL): winston.Logger;
}
export declare enum LOGGING_LEVEL {
    ERROR = "error",
    WARN = "warn",
    INFO = "info",
    VERBOSE = "verbose",
    DEBUG = "debug",
    SILLY = "silly"
}
declare const _default: Logger;
export default _default;
