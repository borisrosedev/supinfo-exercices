import { Router } from "express"
import userCtrl from "../controllers/user.js"
const router = Router();

router.put('/', userCtrl.store)
router.get('/', userCtrl.index)
router.get('/:id', userCtrl.findOneUser)
router.delete('/:id', userCtrl.deleteUser)
router.post('/:id', userCtrl.updateUser)

export default router;