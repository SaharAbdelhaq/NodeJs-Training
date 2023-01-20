const express = require('express')
const app = express()

let nextId = 3
const tasks = [
    {
        id: 1,
        title: 'Write Code',
        description: 'Write code for todo app',
        isCompleted: true
    },
    {
        id: 2,
        title: 'Test App',
        description: 'Test the todo app',
        isCompleted: false
    }
]

app.use(express.json()) // to parse JSON bodies

// submint a task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body
  if (!title || !description) {
    res.status(400).send({ error: 'Title and description are required' })
    return
  }
  const task = { id: nextId++, title, description, isCompleted: false }
  tasks.push(task)
  res.status(201).send(task)
})

// fetch task
app.get('/tasks', (req, res) => {
  res.send(tasks)
})

// fetch task by id 
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id))
  if (!task) res.status(404).send({ error: 'Task not found' })
  res.send(task)
})

//update task by id 
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id))
  if (!task) res.status(404).send({ error: 'Task not found' })
  const { title, description } = req.body
  if (!title || !description) {
    res.status(400).send({ error: 'Title and description are required' })
    return
  }
  task.title = title
  task.description = description
  res.send(task)
})

//delete task by id 
app.delete('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id))
    if (!task) res.status(404).send({ error: 'Task not found' })
    const index = tasks.indexOf(task)
    tasks.splice(index, 1)
    res.send({ message: `Task with id ${task.id} deleted successfully` })
  })
  
  // update task status 
  app.patch('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id))
    if (!task) res.status(404).send('Task not found')
    task.status = req.body.status
    res.send(task)
  })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`))

