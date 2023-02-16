import { Router } from "express";
import { listProducts, listProduct, updateProduct, deleteProduct, createProducts } from "../controllers/products.controller.js"
import { createLocation, listLocation, listLocations, updateLocation, deleteLocation } from "../controllers/locations.controller.js"
import { createCategory, listCategory, listCategories, updateCategory, deleteCategory } from '../controllers/categories.controller.js'
import { createDepartment, listDepartments, updateDepartment, deleteDepartment } from '../controllers/departments.controller.js'
import { createMunicipality, listMunicipalities, updateMunicipality, deleteMunicipality } from '../controllers/municipalities.controller.js'

const router = Router();

//Routes from products
router.post('/create-product', createProducts)
router.get('/get-product/:id', listProduct )
router.get('/get-products', listProducts)
router.put('/update-product/:id', updateProduct)
router.put('/deactivate-product/:id', deleteProduct)

//Routes from locations
router.post('/create-location', createLocation)
router.get('/get-location/:id', listLocation)
router.get('/get-locations', listLocations)
router.put('/update-location/:id', updateLocation)
router.put('/deactivate-location/:id',deleteLocation)


//Routes from categories
router.post('/create-category', createCategory)
router.get('/get-category/:id', listCategory)
router.get('/get-categories', listCategories)
router.put('/update-category/:id', updateCategory)
router.put('/deactivate-category/:id', deleteCategory)

//Routes from Departments
router.post('/create-department', createDepartment)
router.get('/get-departments', listDepartments)
router.put('/udpate-departments/:id', updateDepartment)
router.put('/deactivate-department/:id', deleteDepartment)

//Routes from Municipalities
router.post('/create-municipality', createMunicipality)
router.get('/get-municipalities', listMunicipalities)
router.put('/update-municipality/:id', updateMunicipality)
router.put('/deactivate-municipality/:id', deleteMunicipality)

export default router;