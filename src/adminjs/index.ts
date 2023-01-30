import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentications";

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin", //definir a rota pra o painel de administração
    resources: adminJsResources,
    locale: locale,
    dashboard: dashboardOptions,
    branding: brandingOptions
})

// export const adminJsRouter = AdminJSExpress.buildRouter(adminJs) // Construção de rotas para a nossa instancia de adminJs

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    authenticationOptions,
    null,
    {
        resave: false,
        saveUninitialized: false
    }
)