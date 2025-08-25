import express from 'express';
import { prismaClient } from '../prisma/prisma.ts';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/users', async (req, res) => {
    const users = await prismaClient.user.findMany(); 
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const { params } = req;

    const user = await prismaClient.user.findUnique({
        where:{
            id: Number(params.id),
        }
    }); 

    if(!user){
        return res.status(404).json({
            message: "Usuário não existe no banco de dados."
        })
    }

    return res.json(user);
});


app.listen(PORT, () => {
    console.log(`Server port ${PORT}`);
});