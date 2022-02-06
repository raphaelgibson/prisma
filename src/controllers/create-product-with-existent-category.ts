import { Request, Response } from 'express'
import { prismaClient } from '../database/prisma-client'

export class CreateProductWithExistentCategory {
  async handle(req: Request, res: Response) {
    const { name, price, bar_code, id_category } = req.body

    const product = await prismaClient.productCategory.create({
      data: {
        product: {
          create: {
            name,
            price,
            bar_code
          }
        },
        category: {
          connect: {
            id: id_category
          }
        }
      }
    })

    res.json(product)
  }
}