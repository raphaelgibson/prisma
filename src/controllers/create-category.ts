import { Request, Response } from 'express'
import { prismaClient } from '../database/prisma-client'

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body

    const category = await prismaClient.category.create({
      data: {
        name
      }
    })

    res.json(category)
  }
}
