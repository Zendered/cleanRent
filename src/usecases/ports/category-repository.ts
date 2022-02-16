import { ICategoryDTO } from '@/entities';

export interface ICategoryRepository {
add(category: ICategoryDTO): Promise<void>
findCategoryById(id: string): Promise<ICategoryDTO>
findAllCategories(): Promise<ICategoryDTO[]>
exists(category: ICategoryDTO): Promise<boolean>
}
