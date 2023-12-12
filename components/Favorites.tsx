import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import FavoriteItem from "./FavoriteItem";
import { StarIcon } from "@heroicons/react/24/outline";

export type FavoriteType = {
  _id: string;
  userId: string;
  productId: string;
};

export default function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteType[] | null>(null);
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
      <h1 className="bg-black text-white w-max p-3 border-b-4 border-r-4 border-lime-500 text-3xl sl:text-center m-6">
        Favorites
      </h1>
      {favorites && favorites.length > 0 ? (
        favorites.map((f, index) => {
          return <FavoriteItem key={index} productId={f.productId} />;
        })
      ) : (
        <StarIcon className="max-w-xs mx-auto text-lime-500 mb-20" />
      )}
    </div>
  );
}
