import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import FavoriteItem from "./FavoriteItem";

export type FavoriteType = {
  _id: string;
  userId: string;
  productId: string;
};

export default function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteType[] | []>([]);
  const { data: session }: any = useSession();
  const id = session?.user.id;

  useEffect(() => {
    const getFavorites = async () => {
      await axios
        .get(`/api/favorites?userId=${id}`)
        .then((res) => setFavorites(res.data.favorites));
    };
    getFavorites();
  }, [id]);

  return (
    <div>
      <h1 className="text-xl font-bold text-center my-6">Favorites</h1>
      {favorites &&
        favorites.map((f, index) => {
          return <FavoriteItem key={index} productId={f.productId} />;
        })}
    </div>
  );
}
