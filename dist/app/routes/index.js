"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generator_route_1 = require("../modules/generator/generator.route");
const user_route_1 = require("../modules/user/user.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/generator',
        route: generator_route_1.GeneratorRoutes,
    },
    {
        path: '/user',
        route: user_route_1.UserRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
