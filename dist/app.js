"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
if (process.env.NODE_ENV !== "production") {
    dotenv_1.default.config();
}
const logger_1 = __importStar(require("./logger"));
const fs_1 = __importDefault(require("fs"));
const logger = logger_1.default.getConsoleLogger("app", logger_1.LOGGING_LEVEL.SILLY);
const file = fs_1.default.readFileSync('./tsconfig.json');
logger.info(file.toString().split('').slice(10, 40).join(''));
//# sourceMappingURL=app.js.map