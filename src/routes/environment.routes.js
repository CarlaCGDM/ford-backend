import { Router } from 'express'
const router = Router()

import * as environmentController from '../controllers/environment.controller'
import {authJwt} from '../middlewares/index'

router.post('/', [authJwt.verifyToken, authJwt.isEditor], environmentController.createEnvironment)

router.get('/', environmentController.getEnvironments)
router.get('/selected', environmentController.getSelectedEnvironment)
router.get('/select/:environmentId',environmentController.selectEnvironmentById)

router.get('/:environmentId', environmentController.getEnvironmentById)
router.put('/:environmentId', [authJwt.verifyToken, authJwt.isEditor], environmentController.updateEnvironmentById)
router.delete('/:environmentId', [authJwt.verifyToken, authJwt.isEditor], environmentController.deleteEnvironmentById)

export default router