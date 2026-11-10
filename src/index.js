'use strict'
const express = require('express')
const app = express()
app.use(express.json())
app.get('/actuator/health', (_, res) => res.json({ status: 'UP' }))
app.get('/notifications', (_, res) => res.json({ status: 'ok' }))
app.post('/notifications', (_, res) => res.json({ status: 'ok' }))
app.get('/notifications/:id', (_, res) => res.json({ status: 'ok' }))
app.listen(process.env.PORT || 8103)
