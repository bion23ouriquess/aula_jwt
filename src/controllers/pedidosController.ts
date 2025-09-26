import { prismaClient } from "../../prisma/prisma.ts";
import type { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import type { Request, Response } from "express";

enum pedidoColumns {
  VALOR = "valor",
  STATUS = "status",
  USER_ID = "userId",
  CREATED_AT = "createdAt",
  UPDATED_AT = "updatedAt",
}

export const createPedido = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const pedido = await prismaClient.pedido.create({
      data: body,
    });

    // CRIACAO DO REGISTRO NA TABELA RELACAO
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).send(`Erro no servidor: ${error}`);
  }
};

export const listPedidos = async (_: Request, res: Response) => {
  try {
    const pedidos = await prismaClient.pedido.findMany();
    res.json(pedidos);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Erro no servidor: ${error}`);
  }
};

export const listPedidoById = async (req: Request, res: Response) => {
  try {
    const { params } = req;

    const pedido = await prismaClient.pedido.findUnique({
      where: {
        id: Number(params.id),
      },
    });

    if (!pedido) {
      return res.status(404).json({
        message: "Pedido não existe no banco de dados.",
      });
    }

    return res.json(pedido);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Erro no servidor: ${error}`);
  }
};

export const updatePedido = async (req: Request, res: Response) => {
  try {
    const { params, body } = req;
    const bodyKeys: string[] = Object.keys(body);
    for (const key of bodyKeys) {
      if (
        key !== pedidoColumns.VALOR &&
        key !== pedidoColumns.STATUS &&
        key !== pedidoColumns.USER_ID &&
        key !== pedidoColumns.CREATED_AT &&
        key !== pedidoColumns.UPDATED_AT
      )
        return res.status(404).send("Colunas não existentes");
    }
    const pedido = await prismaClient.pedido.update({
      where: { id: Number(params.id) },
      data: {
        ...body,
      },
    });
    return res.status(200).json({
      message: "Pedido atualizado!",
      data: pedido,
    });
  } catch (error) {
    if ((error as PrismaClientKnownRequestError).code == "P2025") {
      res.status(404).send("Pedido não encontrado!");
    }
    console.log(error);
    res.status(500).send(`Erro no servidor: ${error}`);
  }
};

export const deletePedido = async (req: Request, res: Response) => {
  try {
    const { params } = req;
    await prismaClient.pedido.delete({
      where: {
        id: Number(params.id),
      },
    });
    res.status(200).send("Pedido deletado com sucesso!");
  } catch (error) {
    if ((error as PrismaClientKnownRequestError).code == "P2025") {
      res.status(404).send("Pedido não encontrado!");
    }
    console.log(error);
    res.status(500).send(`Erro no servidor: ${error}`);
  }
};
