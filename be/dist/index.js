"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
require("dotenv").config();
// console.log(process.env.DEEPSEEK_API_KEY);
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
// Please install OpenAI SDK first: `npm install openai`
const openai = new openai_1.default({
    baseURL: "https://api.deepseek.com/v1",
    apiKey: `${DEEPSEEK_API_KEY}`,
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const completion = yield openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "deepseek-chat",
        });
        console.log(completion.choices[0].message.content);
    });
}
main();
