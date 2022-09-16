import { notFound } from '@hapi/boom';
import { Item } from './../models/item.model';

export class ItemsService {
  constructor() {}

  async all() {
    return await Item.find();
  }

  // async get(id: String) {
  //   const item = await Item.findById(id);
  //   if (!item) {
  //     throw notFound(`Item with ID ${id} not found`);
  //   }
  //   return item;
  // }

  // async create(data: any) {
  //   return Item.create(data);
  // }

  // async update(id: String, data: any) {
  //   const item = await Item.findByIdAndUpdate(id, data, { new: true });
  //   if (!item) {
  //     throw notFound(`Item with ID ${id} not found`);
  //   }
      
  //   return item;
  // }

  // async delete(id: String) {
  //   const item = await Item.findByIdAndDelete(id);
  //   if (!item) {
  //     throw notFound(`Item with ID ${id} not found`);
  //   }
  //   return item;
  // }
}