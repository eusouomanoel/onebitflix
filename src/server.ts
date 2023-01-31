import express, { application } from "express" //Importação do Express
import { adminJs, adminJsRouter } from "./adminjs"
import { sequelize } from "./database"
import { router } from "./routes"

const app = express()  //Criação de aplicação de express

// adicione o middleware de arquivos estáticos do express e o router do AdminJS que criamos:
app.use(express.static('public'))

app.use(express.json()) //middleware para trabalhar com json na requisição

// app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = process.env.PORT || 3000  // Ouvir a aplicação com a definição de PORTA

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log(`DB connection successfull`)
    })
    console.log(`Server started successfuly at port ${PORT}`)  //Feedback para verificar se esta rodando corretamente
})