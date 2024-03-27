import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIcon2 } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import axios from "axios";
import { FavoriteType } from "./Favorites";

export default function AddToFavorites({ productId }: { productId: string }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorite, setFavorite] = useState<FavoriteType | null>(null);
  const { data: session }: any = useSession();
  const id = session?.user.id;

  useEffect(() => {
    const evalFavorite = async () => {
      await axios
        .get(`/api/favorites/isFavorite?userId=${id}&productId=${productId}`)
        .then((res) => {
          setFavorite(res.data.favorite);
          if (res.data.favorite && res.data.favorite.productId === productId) {
            setIsFavorite(true);
          }
        });
    };
    evalFavorite();
  }, [id, productId]);

  const addToFavorite = async () => {
    if (!isFavorite) {
      await axios
        .post(`/api/favorites?userId=${session.user.id}`, { data: productId })
        .then((res) => setIsFavorite(true));
    }
  };

  const deleteToFavorite = async () => {
    if (isFavorite) {
      await axios
        .delete(`/api/favorites/isFavorite?favoriteId=${favorite?._id}`)
        .then(() => setIsFavorite(false));
    }
  };

  return (
    session && (
      <div className="grid justify-items-end mr-12 mt-6">
        {!isFavorite ? (
          <StarIcon
            className="h-10 w-10 cursor-pointer mb-6 text-pink-600"
            onClick={addToFavorite}
          />
        ) : (
          <StarIcon2
            className="h-10 w-10 cursor-pointer mb-6 text-pink-600"
            onClick={deleteToFavorite}
          />
        )}
      </div>
    )
  );
}
