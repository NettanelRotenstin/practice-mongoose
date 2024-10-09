import exp, { Express } from "express"
import dot from 'dotenv'

const app: Express = exp()

dot.config()

 

const port: string| number = process.env.PORT || 1415

app.use(exp.json())

 

// app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

 
 //app.use('/user', require('./routers/userRoute'))
 


// app.get('/', (req, res) => {
//     res.send('Hello, Swagger!');
//   });


app.listen(port, () => console.log(`server running on port ${port}`))

