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
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("../lib/email");
const config_1 = require("../config");
let sendData = [];
let timeout;
/**
 * 展示爬取数据
 * @param {any[]} data
 */
exports.showData = (data, keywords) => {
    if (data.length > 0) {
        sendData = sendData.concat(data);
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield email_1.sendMail(sendData, keywords);
                sendData = [];
            }
            catch (e) {
            }
        }), config_1.default.SEND_TIME);
    }
    else {
        console.log('no data');
    }
};
