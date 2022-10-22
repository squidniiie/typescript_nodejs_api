import {Express,Request, Response} from 'express';
import { createUserSessionHandler, getUserSessionsHandler, deleteSessionHandler } from '../controllers/session.controller';
import { createUserHandler } from '../controllers/user.controller';
import validateResource from '../middleware/validateResource'
import { createSessionSchema} from '../schema/session.schema'
import {createUserSchema} from '../schema/user.schema';
import requireUser from '../middleware/requireUser';
function routes(app: Express) {
    app.get('/', (req:Request, res: Response) => res.sendStatus(200));
// Users route
    app.post('/api/users', validateResource(createUserSchema), createUserHandler);
// Session route
app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler);
    
app.get('/api/sessions', requireUser, getUserSessionsHandler)
app.delete('/api/sessions', requireUser, deleteSessionHandler);
}
// Delete route
export default routes;


// const express = require('express')
// const router = express.Router()
// const {get} = require('../controllers/guestController')

// module.exports = router
// router.get('/',(req: any, res: any) => {
//     res.status(200).json({message: 'Your Reservations!'})})

// router.post('/',(req: any, res: any) => {
//     res.status(200).json({message: 'Create Reservations!'})})

// router.put('/:id',(req: any, res: any) => {
//     res.status(200).json({message: `Update your reservations ${req.params.id}`})})

// router.delete('/:id',(req: any, res: any) => {
//     res.status(200).json({message: `Delete your reservations ${req.params.id}`})})