const mysql = require("../mysql")
const http = require("../systems/http-request")

exports.checkIp = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM ips WHERE ip = ?;'
        const result = await mysql.execute(query, [req.params.ip])
        
        const response = {
            existIp: result.length > 0 ? true : false
        }
        
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getVersion = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM scripts WHERE script = ?;'
        const result = await mysql.execute(query, [req.params.script])

        if (result.length == 0) {
            return res.status(404).send({
                error: "Esse script não existe"
            })
        }
        
        const response = {
            id: result[0].id,
            version: result[0].versao
        }
        
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getMsgs = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM scripts WHERE script = ?;'
        const result = await mysql.execute(query, [req.params.script])

        if (result.length == 0) {
            return res.status(404).send({
                error: "Esse script não existe"
            })
        }
        
        const response = {
            id: result[0].id,
            messages: JSON.parse(result[0].msgs)
        }
        
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.unauthorizedAccess = async (req, res, next) => {
    try {

        const request = await http.createSimpleHttpRequest("SUA_URL_WEBHOOK", { content: req.body.content }, 'POST', { ['Content-Type']: 'application/json' })

        return res.status(201).send({
            message: request === undefined ? "Webhook enviado com sucesso" : "Ocorreu um erro ao enviar o Webhook"
        })

    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

// exports.getCodes = async (req, res, next) => {
//     try {
//         const query = 'SELECT * FROM codigos WHERE script = ?;'
//         const result = await mysql.execute(query, [req.params.script])

//         if (result.length == 0) { return res.status(404).send({ error: "Esse script não possui nenhum código" }) }

//         for (let i = 0; i < result.length; i++) {
//             if (result[i].arquivo == req.body.arquivo) {
                        
//                 const response = {
//                     code: result[i].codigo
//                 }
                
//                 return res.status(200).send(response)
//             }
//         }
        
//         return res.status(404).send({
//             error: "Esse script não possui o arquivo " + (req.body.arquivo ?? "undefined.lua")
//         })
//     } catch (error) {
//         return res.status(500).send({ error: error })
//     }
// }