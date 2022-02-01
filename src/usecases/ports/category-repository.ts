import { ICategoryData } from '@/entities';

export interface ICategoryRepository {
add(category: ICategoryData): Promise<void>
findCategoryById(id: string): Promise<ICategoryData>
findAllCategories(): Promise<ICategoryData[]>
exists(category: ICategoryData): Promise<boolean>
}
