import { ResourceOptions } from "adminjs";

export const categoryResourceOptions: ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'position'],
    filterProperties: ['name', 'position', 'createdAt', 'updatedAt'],
    listProperties: ['ind', 'name', 'position'],
    showProperties: ['id', 'name', 'position', 'createdAt', 'updatedAt']
}