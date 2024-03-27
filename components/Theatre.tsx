"use client";
import { useState } from "react";
import styles from "./Theatre.module.css";
import { Product } from "./ProductLists";
import AddToCart from "./AddToCart";

export default function Theatre({ product }: { product: Product }) {
  const [seats, setSeats] = useState<boolean[][]>(product.seats as boolean[][]);
  const [seatsDesc, setSeatsDesc] = useState<string[]>([]);

  const rows = "ABCDEFGHIJ";

  const getRowLetter = (rowIndex: number) => {
    return rows[rowIndex];
  };

  const getSeatNumber = (seatIndex: number) => {
    return seatIndex + 1;
  };

  const handleSeatClick = (row: number, seat: number) => {
    // Actualiza el estado para marcar un asiento como seleccionado o deseleccionado
    const updatedSeats = [...seats];
    updatedSeats[row][seat] = !updatedSeats[row][seat];
    setSeats(updatedSeats);

    if (updatedSeats[row][seat]) {
      const seatsArray = seatsDesc.concat(
        getRowLetter(row) + getSeatNumber(seat)
      );
      setSeatsDesc(seatsArray);
    } else {
      const seatsArray = seatsDesc.filter(
        (s) => s !== getRowLetter(row) + getSeatNumber(seat)
      );
      setSeatsDesc(seatsArray);
    }
  };

  const selectedSeats = seats.flat().filter((seat) => seat).length;
  const availableSeats = seats.flat().filter((seat) => !seat).length;

  return (
    <div className="flex flex-col justify-center text-center p-6">
      <h1 className="max-w-max mx-auto p-1 text-black font-bold bg-white">
        Seats Selection
      </h1>
      <div className={`${styles.theatre_layout} mx-auto`}>
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            <div className={styles.row_label}>{getRowLetter(rowIndex)}</div>
            {row.map((seat: boolean, seatIndex: number) => (
              <div
                key={seatIndex}
                className={`${styles.seat} ${
                  seat ? styles.selected : styles.available
                }`}
                onClick={() => handleSeatClick(rowIndex, seatIndex)}
              >
                {seat ? "X" : getSeatNumber(seatIndex)}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.scenery}></div>
      <div className="bg-black text-white border-b-4 border-r-4 border-lime-600">
        <p>
          Selected Seats:{" "}
          <strong className="text-fuchsia-500">{selectedSeats}</strong>
        </p>
        <p>Available Seats: {availableSeats}</p>
        <p>
          Seat:{" "}
          {seatsDesc.map((s, i) => (
            <strong key={i} className="text-fuchsia-500">
              {s}{" "}
            </strong>
          ))}
        </p>
      </div>
      <AddToCart
        productId={product._id}
        selectedSeats={selectedSeats}
        seats={seats}
        desc={seatsDesc}
        disabled={selectedSeats > 0 ? false : true}
      />
    </div>
  );
}
