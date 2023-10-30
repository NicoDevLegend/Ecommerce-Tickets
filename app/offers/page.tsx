import ProductLists from "../../components/ProductLists";

export default function Offers() {
  return (
    <section>
      <ProductLists section="sports" offers />
      <ProductLists section="concerts" offers />
      <ProductLists section="theatre" offers />
    </section>
  );
}
