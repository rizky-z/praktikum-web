import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getCategories = async (req, res) =>{
    try {
        const response = await prisma.categori.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getCategoriById = async (req, res) =>{
    try {
        const response = await prisma.categori.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createCategori = async (req, res) =>{
    const {name} = req.body;
    try {
        const categori = await prisma.categori.create({
            data:{
                name: name
            }
        });
        res.status(201).json(categori);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateCategori = async (req, res) =>{
    const {name} = req.body;
    try {
        const categori = await prisma.categori.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                name: name
            }
        });
        res.status(200).json(categori);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }     
}

export const deleteCategori = async (req, res) =>{
    try {
        const categori = await prisma.categori.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(categori);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}