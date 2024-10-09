import exp,{Router} from 'express'

 
export const router:Router = exp.Router()

// routes/sample.js
/**
 * @swagger
 * /createuser:
 *   post:
 *     summary: Returns a sample message
 *     responses:
 *       201:
 *         description: A successful response
 */
router.post('/createtodo',   ()=>{})

// routes/sample.js
/**
 * @swagger
 * /getall:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */

router.get('/getall', ()=>{})

 
 

 