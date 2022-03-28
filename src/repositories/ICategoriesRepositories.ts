import { Category } from "../model/Category";

export interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepositoty {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepositoty };
