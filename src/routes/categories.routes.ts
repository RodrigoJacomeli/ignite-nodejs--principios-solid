import { Router, Request, Response } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get("/", (request: Request, response: Response) => {
    const categories = categoriesRepository.list();

    return response.status(200).json({ categories });
});

categoriesRoutes.post("/", (request: Request, response: Response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository
    );

    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

export { categoriesRoutes };
