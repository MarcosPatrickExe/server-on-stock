import { hash } from 'bcryptjs';
import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

/**
 * Query: muito usado para persistir estado - ex rota: /ads/page=2
 * Route: muito usado para identificação de recurso, não são nomeados, são entendidos intrinsecamente: /post/como-criar-uma-api
 * Body: usado paa enviar várias infos numa requisição, corpo da requisição;
 */

export class UserController {
      async createUser(request: Request, response: Response) {

        const { name, email, login, password, address, phone, role} = request.body

        

        const result = await prismaClient.user.create({
            data: {
                name,
                email,
                login,
                password,
                address,
                phone
                //  role
            }
        })

        console.log("Usuário cadastrado com sucesso");

        return response.status(201).json(result);
  }


  async loginUser(request :Request, response :Response){
      response.send("Login ainda implementado...");
  }

  async allUser(request :Request, response: Response){
       const listUsers = await prismaClient.user.findMany();
       response.json( listUsers );
  }
}