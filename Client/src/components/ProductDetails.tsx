import type { Product } from "../types";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  const isAvailable = product.availability;
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
      <td className="p-3 text-lg text-gray-500">{product.name}</td>
      <td className="p-3 text-lg text-gray-500">${product.price}</td>
      <td className="p-3 text-lg text-gray-500">
        {isAvailable ? "Disponible" : "No disponible"}
      </td>
      <td className="p-3 text-lg text-gray-500 flex justify-center align-center flex-wrap gap-5">
        <button className="rounded-md bg-slate-500 text-white px-4 py-2 font-bold capitalize text-center shadow-md hover:bg-slate-600 transition-colors cursor-pointer">
          Editar
        </button>
        <button className="rounded-md bg-red-400 text-white px-4 py-2 font-bold capitalize text-center shadow-md hover:bg-red-600 transition-colors cursor-pointer">
          Eliminar
        </button>
      </td>
    </tr>
  );
}
