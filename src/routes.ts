import { Router } from 'express'
import { CreateCategoryController } from './controllers/create-category'
import { CreateProductController } from './controllers/create-product'
import { CreateProductCategoryController } from './controllers/create-product-category'
import { CreateProductWithExistentCategory } from './controllers/create-product-with-existent-category'
import { FindCategoryController } from './controllers/find-category'
import { FindProductController } from './controllers/find-product'

export const router = Router()

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategory = new CreateProductCategoryController()
const createProductWithExistentCategory = new CreateProductWithExistentCategory()

const findProduct = new FindProductController()
const findCategory = new FindCategoryController()

router.post('/product', createProduct.handle)
router.post('/category', createCategory.handle)
router.post('/productCategory', createProductCategory.handle)
router.post('/productWithExistentCategory', createProductWithExistentCategory.handle)

router.get('/product/:id', findProduct.handle)
router.get('/category/:id', findCategory.handle)
