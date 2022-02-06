import { Request, Response } from "express";
import { prismaClient } from "../database/prisma-client";

export class FindProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const product = await prismaClient.product.findFirst({
      where: {
        id
      },
      include: {
        ProductCategory: {
          include: {
            category: true
          }
        }
      }
    })

    res.json(product)
  }
}