import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

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
      <h1 className="font-bold">Favorites</h1>
      <p>{JSON.stringify(favorites)}</p>
    </div>
  );
}
