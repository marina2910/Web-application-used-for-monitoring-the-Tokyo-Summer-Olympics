import express from 'express';
import { UserControllers } from '../controllers/UserController.controllers';

const userRouter = express.Router();

userRouter.route('/login').post((req: express.Request, res: express.Response) => {
    return new UserControllers().login(req, res);
})

userRouter.route('/password').post((req: express.Request, res: express.Response) => {
    return new UserControllers().changePass(req, res);
})

userRouter.route('/register').post((req: express.Request, res: express.Response)=> {
    return new UserControllers().register(req, res);
})

userRouter.route('/getAll').get((req: express.Request, res: express.Response)=> {
    return new UserControllers().getAll(req, res);
})

userRouter.route('/approve').post((req: express.Request, res: express.Response)=> {
    return new UserControllers().approve(req, res);
})

userRouter.route('/decline').post((req: express.Request, res: express.Response)=> {
    return new UserControllers().decline(req, res);
})
export default userRouter;