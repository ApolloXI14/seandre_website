// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Content from "../models/content";


// Global Config
export const homesRouter = express.Router();

homesRouter.use(express.json());

// GET
homesRouter.get('/', async (_req: Request, res: Response) => {
    try {
        return await collections.homes.find({}, {title: 1, date: 1, content: 1}).sort({date: dateSort}).toArray();
    } catch(err) {
        throw new Error(`Failed to get documents from ${collectionName}: ${err}`);
    }
});

// POST

// PUT

// DELETE
