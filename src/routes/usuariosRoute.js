import { Router } from 'express';
import { methods as usuariosController } from  './../controllers/usuariosController'

const router = Router();
router.get("/api/Usuarios" , usuariosController.getUsuarios );

export default router; 