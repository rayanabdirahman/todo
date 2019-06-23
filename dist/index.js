"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
const PORT = 8080;
// direct routes to route file
app.use("/", index_1.default);
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`App running on PORT: ${PORT}`);
});
//# sourceMappingURL=index.js.map