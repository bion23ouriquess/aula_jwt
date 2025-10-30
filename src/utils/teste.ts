import type { UrlWithStringQuery } from "node:url";

type Bloco = {
  cor: number;
  lamina1: number;
  lamina2: number;
  lamina3: number;
  padrao1: string;
  padrao2: string;
  padrao3: string;
};

type CarInfo = {
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  preco: number;
  motor: string;
  cambio: string;
};

type MappedProduct = {
  codigoProduto: number;
  sku: string;
  info: CarInfo;
  bloco: Bloco;
};

const produtosMapeados: MappedProduct[] = [
  {
    codigoProduto: 1,
    sku: "KIT-01",
    info: {
      marca: "Toyota",
      modelo: "Corolla",
      ano: 2022,
      cor: "Prata",
      preco: 115000,
      motor: "2.0 Flex",
      cambio: "CVT"
    },
    bloco: { cor: 1, lamina1: 1, lamina2: 2, lamina3: 3, padrao1: "A1", padrao2: "B1", padrao3: "C1" },
  },
  {
    codigoProduto: 2,
    sku: "KIT-02",
    info: {
      marca: "Honda",
      modelo: "Civic",
      ano: 2021,
      cor: "Preto",
      preco: 120000,
      motor: "1.5 Turbo",
      cambio: "Automático"
    },
    bloco: { cor: 1, lamina1: 5, lamina2: 4, lamina3: 3, padrao1: "D1", padrao2: "E1", padrao3: "F1" },
  },
  {
    codigoProduto: 3,
    sku: "KIT-03",
    info: {
      marca: "Chevrolet",
      modelo: "Onix",
      ano: 2023,
      cor: "Branco",
      preco: 85000,
      motor: "1.0 Turbo",
      cambio: "Manual"
    },
    bloco: { cor: 1, lamina1: 3, lamina2: 1, lamina3: 5, padrao1: "G1", padrao2: "H1", padrao3: "I1" },

  },
  {
    codigoProduto: 4,
    sku: "KIT-04",
    info: {
      marca: "Volkswagen",
      modelo: "Virtus",
      ano: 2022,
      cor: "Azul",
      preco: 99000,
      motor: "1.6 MSI",
      cambio: "Automático"
    },
    bloco: { cor: 1, lamina1: 2, lamina2: 4, lamina3: 1, padrao1: "J1", padrao2: "K1", padrao3: "L1" },

  },
  {
    codigoProduto: 5,
    sku: "KIT-05",
    info: {
      marca: "Hyundai",
      modelo: "HB20",
      ano: 2023,
      cor: "Vermelho",
      preco: 78000,
      motor: "1.0 Flex",
      cambio: "Manual"
    },
    bloco: { cor: 2, lamina1: 2, lamina2: 4, lamina3: 1, padrao1: "M2", padrao2: "N2", padrao3: "O2" }
  }
];

console.log(JSON.stringify(produtosMapeados, null, 2));
