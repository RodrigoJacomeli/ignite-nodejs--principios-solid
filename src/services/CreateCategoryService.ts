import { ICategoriesRepositoty } from "../repositories/ICategoriesRepositories";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepositoty) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists - &4001");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
