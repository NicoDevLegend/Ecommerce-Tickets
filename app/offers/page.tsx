import ProductLists from "../../components/ProductLists";

export default function Offers() {
  return (
    <section className="pt-12">
      <h1 className="mx-auto p-6 text-5xl border-r-8 border-b-8 border-green-500 max-w-max font-bold tracking-tight bg-black text-pink-600 sm:text-6xl">
        Offers -%
      </h1>
      <ProductLists section="sports" offers />
      <ProductLists section="concerts" offers />
      <ProductLists section="theatre" offers />
    </section>
  );
}
