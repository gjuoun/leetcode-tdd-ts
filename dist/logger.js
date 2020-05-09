"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const chalk_1 = __importDefault(require("chalk"));
const { format, transports } = winston_1.default;
class Logger {
    constructor() { }
    getFormat(label, colorize) {
        return format.combine((colorize ? format.colorize() : format.simple()), format.label({ label }), format.splat(), format.timestamp(), format.printf((info) => {
            const title = colorize ? chalk_1.default.green.bold(info.label) : info.label;
            return `<${title}>${info.timestamp}[${info.level}]: ${info.message}`;
        }));
    }
    getConsoleLogger(label, level) {
        // display console log with colors
        const format = this.getFormat(label, true);
        return winston_1.default.createLogger({
            format,
            transports: [new transports.Console()],
            level
        });
    }
    getFileLogger(label, level) {
        const format = this.getFormat(label, false);
        return winston_1.default.createLogger({
            format,
            transports: [new transports.File({ filename: `./log/${label}.log` })],
            level
        });
    }
}
var LOGGING_LEVEL;
(function (LOGGING_LEVEL) {
    LOGGING_LEVEL["ERROR"] = "error";
    LOGGING_LEVEL["WARN"] = "warn";
    LOGGING_LEVEL["INFO"] = "info";
    LOGGING_LEVEL["VERBOSE"] = "verbose";
    LOGGING_LEVEL["DEBUG"] = "debug";
    LOGGING_LEVEL["SILLY"] = "silly";
})(LOGGING_LEVEL = exports.LOGGING_LEVEL || (exports.LOGGING_LEVEL = {}));
exports.default = new Logger();
//# sourceMappingURL=logger.js.map