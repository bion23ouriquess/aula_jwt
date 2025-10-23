import axios from "axios";

class SimuladorService {
  // TO-DO TIPAR PEDIDO
  constructor() {}
  async enviarPedidoParaFila(pedido: any) {
    try {
      const pedidoId = pedido.id;
      const result = await axios({
        method: "post",
        url: "http://52.1.197.112:3000/queue/items",
        data: {
          payload: {
            orderId: pedidoId,
            order: { bloco: pedido.bloco },
          },
          callbackUrl: `http://localhost:3000/pedidos/${pedidoId}`,
        },
      });

      return result;
    } catch (error: any) {
      console.log(error);
      throw new Error(error, {});
    }
  }
}

export const simuladorService = new SimuladorService();
