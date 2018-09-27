"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePath = (path) => path
    ? path.startsWith('/')
        ? ('/' + path.replace(/\/+$/, '')).replace(/\/+/g, '/')
        : '/' + path.replace(/\/+$/, '')
    : '/';
//# sourceMappingURL=validate-path.util.js.map