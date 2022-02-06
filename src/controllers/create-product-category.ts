import { Request, Response } from "express";
import { prismaClient } from "../database/prisma-client";

export class CreateProductCategoryController {
  async handle(req: Request, res: Response) {
    const { id_category, id_product } = req.body

    const productCategory = await prismaClient.productCategory.create({
      data: {
        id_category,
        id_product
      }
    })

    res.json(productCategory)
  }
}
