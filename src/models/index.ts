import { Category } from "./Category";
import { Course } from "./Course";

//Relacionamento entre as categorias e cursos
Category.hasMany(Course)
Course.belongsTo(Category)

export {
    Category,
    Course
}