import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import logger from '../utils/logger/index'
import { CreateUserInput } from "../schema/user.schema";
export async function createUserHandler(req: Request<{}, {}, CreateUserInput['body']>, res: Response
    ) {
 try{
    const user = await createUser(req.body);
    // express needs to send res 
    return res.send(user); 
    // call create user service 
 }catch(e: any){
logger.error(e)
return res.status(409).send(e.message)
 }
}

// import { Request, Response } from "express";
// import { CreateUserInput } from "../schema/user.schema";
// import { createUser } from "../service/user.service";
// import logger from "../utils/logger";

// export async function createUserHandler(
//   req: Request<{}, {}, CreateUserInput["body"]>,
//   res: Response
// ) {
//   try {
//     const user = await createUser(req.body);
//     return res.send(user);
//   } catch (e: any) {
//     logger.error(e);
//     return res.status(409).send(e.message);
//   }
// }