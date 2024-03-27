"use client";
import { useState } from "react";
import styles from "./Stadium.module.css";
import { Product } from "./ProductLists";
import AddToCart from "./AddToCart";

const SeatsDesc = {
  "North Tribune": 0,
  "NorthEast Tribune": 0,
  "East Tribune": 0,
  "SouthEast Tribune": 0,
  "South Tribune": 0,
  "SouthWest Tribune": 0,
  "West Tribune": 0,
  "NorthWest Tribune": 0,
  Field: 0,
};

export default function Stadium({ product }: { product: Product }) {
  const [selectedSeats, setSelectedSeats] = useState<number>(0);
  const [seatsDesc, setSeatsDesc] = useState(SeatsDesc);
  const [availableSeats, setAvailableSeats] = useState<number[]>(
    product.seats as number[]
  );
  const seatsKeys = Object.keys(seatsDesc);
  const seatsValues = Object.values(seatsDesc);

  const handleTribuneClick = (tribune: number) => {
    if (availableSeats[tribune] > 0) {
      const updatedSeats = [...availableSeats];
      updatedSeats[tribune] = updatedSeats[tribune] - 1;
      setAvailableSeats(updatedSeats);
      setSelectedSeats(selectedSeats + 1);
      switch (tribune) {
        case 0:
          setSeatsDesc({
            ...seatsDesc,
            "North Tribune": seatsDesc["North Tribune"] + 1,
          });
          break;
        case 1:
          setSeatsDesc({
            ...seatsDesc,
            "NorthEast Tribune": seatsDesc["NorthEast Tribune"] + 1,
          });
          break;
        case 2:
          setSeatsDesc({
            ...seatsDesc,
            "East Tribune": seatsDesc["East Tribune"] + 1,
          });
          break;
        case 3:
          setSeatsDesc({
            ...seatsDesc,
            "SouthEast Tribune": seatsDesc["SouthEast Tribune"] + 1,
          });
          break;
        case 4:
          setSeatsDesc({
            ...seatsDesc,
            "South Tribune": seatsDesc["South Tribune"] + 1,
          });
          break;
        case 5:
          setSeatsDesc({
            ...seatsDesc,
            "SouthWest Tribune": seatsDesc["SouthWest Tribune"] + 1,
          });
          break;
        case 6:
          setSeatsDesc({
            ...seatsDesc,
            "West Tribune": seatsDesc["West Tribune"] + 1,
          });
          break;
        case 7:
          setSeatsDesc({
            ...seatsDesc,
            "NorthWest Tribune": seatsDesc["NorthWest Tribune"] + 1,
          });
          break;
        case 8:
          setSeatsDesc({ ...seatsDesc, Field: seatsDesc.Field + 1 });
          break;
        default:
          null;
          break;
      }
    }
  };

  const removeSeats = (i: number) => {
    const updatedSeats = [...availableSeats];
    updatedSeats[i] = updatedSeats[i] + 1;
    setAvailableSeats(updatedSeats);
    const seatValueToRemove = seatsValues[i];
    switch (i) {
      case 0:
        setSeatsDesc({
          ...seatsDesc,
          "North Tribune": seatValueToRemove - 1,
        });
        break;
      case 1:
        setSeatsDesc({
          ...seatsDesc,
          "NorthEast Tribune": seatValueToRemove - 1,
        });
        break;
      case 2:
        setSeatsDesc({
          ...seatsDesc,
          "East Tribune": seatValueToRemove - 1,
        });
        break;
      case 3:
        setSeatsDesc({
          ...seatsDesc,
          "SouthEast Tribune": seatValueToRemove - 1,
        });
        break;
      case 4:
        setSeatsDesc({
          ...seatsDesc,
          "South Tribune": seatValueToRemove - 1,
        });
        break;
      case 5:
        setSeatsDesc({
          ...seatsDesc,
          "SouthWest Tribune": seatValueToRemove - 1,
        });
        break;
      case 6:
        setSeatsDesc({
          ...seatsDesc,
          "West Tribune": seatValueToRemove - 1,
        });
        break;
      case 7:
        setSeatsDesc({
          ...seatsDesc,
          "NorthWest Tribune": seatValueToRemove - 1,
        });
        break;
      case 8:
        setSeatsDesc({ ...seatsDesc, Field: seatValueToRemove - 1 });
        break;
      default:
        null;
        break;
    }
    setSelectedSeats(selectedSeats - 1);
  };

  return (
    <div className="flex flex-col justify-center w-80 mx-auto text-center py-3">
      <h1 className="max-w-max mx-auto p-1 text-black font-bold bg-white">
        Seats Selection
      </h1>
      <div className={styles.stadium}>
        {product.category === "sports" && (
          <div className={`${styles.field} ${styles.field_sports}`}></div>
        )}
        {product.category === "concerts" && (
          <div
            className={`${styles.field} ${styles.field_concerts} ${
              availableSeats[8] === 0
                ? styles.field_selected
                : styles.field_available
            }
            ${seatsValues[8] > 0 && "animate-pulse"}
            `}
            onClick={() => handleTribuneClick(8)}
          >
            <div className="text-black font-bold mt-6 pointer-events-none">
              {availableSeats[8]}
            </div>
          </div>
        )}
        <div
          className={`
            ${styles.north_tribune}
            ${
              availableSeats[0] === 0
                ? styles.selected_top
                : styles.available_top
            }
            ${seatsValues[0] > 0 && "animate-pulse"}
            `}
          onClick={() => handleTribuneClick(0)}
        ></div>
        <div className="absolute text-black font-bold mt-6 pointer-events-none">
          {availableSeats[0] > 0 && availableSeats[0]}
        </div>
        <div
          className={`${styles.northeast_tribune} ${
            product.category === "concerts"
              ? styles.blocked_top
              : availableSeats[1] === 0
              ? styles.selected_top
              : styles.available_top
          }
          ${seatsValues[1] > 0 && "animate-pulse"}
          `}
          onClick={() => handleTribuneClick(1)}
        ></div>
        <div className="absolute text-black font-bold ml-40 mt-10 pointer-events-none">
          {availableSeats[1] > 0 && availableSeats[1]}
        </div>
        <div
          className={`${styles.east_tribune} ${
            product.category === "concerts"
              ? styles.blocked_top
              : availableSeats[2] === 0
              ? styles.selected_top
              : styles.available_top
          }
          ${seatsValues[2] > 0 && "animate-pulse"}
          `}
          onClick={() => handleTribuneClick(2)}
        ></div>
        <div className="absolute text-black font-bold ml-52 mt-28 pointer-events-none">
          {availableSeats[2] > 0 && availableSeats[2]}
        </div>
        <div
          className={`${styles.southeast_tribune} ${
            product.category === "concerts"
              ? styles.blocked_bottom
              : availableSeats[3] === 0
              ? styles.selected_bottom
              : styles.available_bottom
          }
          ${seatsValues[3] > 0 && "animate-pulse"}
          `}
          onClick={() => handleTribuneClick(3)}
        ></div>
        <div className="absolute text-black font-bold ml-40 mt-44 pointer-events-none">
          {availableSeats[3] > 0 && availableSeats[3]}
        </div>
        <div
          className={`${styles.south_tribune} ${
            availableSeats[4] === 0
              ? styles.selected_bottom
              : styles.available_bottom
          }
          ${seatsValues[4] > 0 && "animate-pulse"}
          `}
          onClick={() => handleTribuneClick(4)}
        ></div>
        <div className="absolute text-black font-bold mt-48 pointer-events-none">
          {availableSeats[4] > 0 && availableSeats[4]}
        </div>
        <div
          className={`${styles.southwest_tribune} ${
            availableSeats[5] === 0
              ? styles.selected_bottom
              : styles.available_bottom
          }
          ${seatsValues[5] > 0 && "animate-pulse"}
          `}
          onClick={() => handleTribuneClick(5)}
        ></div>
        <div className="absolute text-black font-bold mr-40 mt-44 pointer-events-none">
          {availableSeats[5] > 0 && availableSeats[5]}
        </div>
        <div
          className={`${styles.west_tribune} ${
            availableSeats[6] === 0
              ? styles.selected_bottom
              : styles.available_bottom
          }
          ${seatsValues[6] > 0 && "animate-pulse"}
          `}
          onClick={() => handleTribuneClick(6)}
        ></div>
        <div className="absolute text-black font-bold mr-52 mt-28 pointer-events-none">
          {availableSeats[6] > 0 && availableSeats[6]}
        </div>
        <div
          className={`${styles.northwest_tribune} ${
            availableSeats[7] === 0 ? styles.selected_top : styles.available_top
          }
          ${seatsValues[7] > 0 && "animate-pulse"}
          `}
          onClick={() => handleTribuneClick(7)}
        ></div>
        <div className="absolute text-black font-bold mr-40 mt-10 pointer-events-none">
          {availableSeats[7] > 0 && availableSeats[7]}
        </div>
      </div>
      <div>
        <div className="bg-black text-white border-b-4 border-r-4 border-lime-600">
          <p>
            Selected Seats:{" "}
            <strong className="text-fuchsia-500">{selectedSeats}</strong>
          </p>
          <p>Seat: </p>
        </div>
        {seatsKeys.map(
          (seat, i) =>
            seatsValues[i] > 0 && (
              <p
                key={i}
                className="p-2 grid grid-cols-6 content-center bg-black text-fuchsia-500 border-b-4 border-r-4 border-lime-600"
              >
                <strong className="col-start-2 col-end-6 col-span-2">
                  &#9733;{seat} X{seatsValues[i]}&#9733;
                </strong>
                <span
                  className="max-w-max ms-4 px-2 bg-fuchsia-600 text-lime-500 shadow shadow-fuchsia-600 cursor-pointer hover:bg-lime-500 hover:text-fuchsia-500"
                  onClick={() => removeSeats(i)}
                >
                  X
                </span>
              </p>
            )
        )}
      </div>
      <AddToCart
        productId={product._id.toString()}
        selectedSeats={selectedSeats}
        desc={seatsDesc}
        seats={availableSeats}
        disabled={selectedSeats > 0 ? false : true}
      />
    </div>
  );
}
