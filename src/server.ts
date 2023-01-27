import express from "express" //Importação do Express
import { adminJs, adminJsRouter } from "./adminjs"
import { sequelize } from "./database"

const app = express()  //Criação de aplicação de express

// adicione o middleware de arquivos estáticos do express e o router do AdminJS que criamos:
app.use(express.static('public'))


// app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000  // Ouvir a aplicação com a definição de PORTA

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log(`DB connection successfull`)
    })
    console.log(`Server started successfuly at port ${PORT}`)  //Feedback para verificar se esta rodando corretamente
})