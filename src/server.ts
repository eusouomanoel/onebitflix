import express from "express" //Importação do Express
import { sequelize } from "./database"

const app = express()  //Criação de aplicação de express

const PORT = process.env.PORT || 3000  // Ouvir a aplicação com a definição de PORTA

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log(`DB connection successfull`)
    })
    console.log(`Server started successfuly at port ${PORT}`)  //Feedback para verificar se esta rodando corretamente
})