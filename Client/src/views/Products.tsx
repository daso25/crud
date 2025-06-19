import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-4xl text-slate-500 font-bold">Productos</h2>
        <Link
          to="/products/new"
          className="rounded-md bg-slate-500 text-white px-4 py-2 font-bold capitalize text-center shadow-md hover:bg-slate-600 transition-colors"
        >
          Agregar Producto
        </Link>
      </div>
    </>
  );
}
