import { Category } from "../model/Category";
import {
    ICategoriesRepositoty,
    ICreateCategoryDTO,
} from "./ICategoriesRepositories";

class PostgresCategoriesRepository implements ICategoriesRepositoty {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }

    list(): Category[] {
        return null;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export { PostgresCategoriesRepository };
