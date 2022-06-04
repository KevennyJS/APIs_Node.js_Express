const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

//middleware

app.use(express.json())

// routes
app.get('/hello', (req, res)=>{
    res.send('Gerenciador de tarefas')
})

app.use('/api/v1/tasks', tasks)


//app.get('/api/v1/tasks')          - Obter todas as tasks
//app.post('/api/v1/tasks')         - Criar uma nova task
//app.get('/api/v1/tasks/:id')      - Obter uma task especifica
//app.patch('/api/v1/tasks/:id')    - Atualizar task
//app.delete('/api/v1/tasks/:id')   - Apagar uma task

const port = 3000

app.listen(port, console.log(`Servidor Rodando na porta ${port}...`))
