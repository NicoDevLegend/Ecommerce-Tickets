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
        getRowLetter(row) + getSeatNumber(seat),
      );
      setSeatsDesc(seatsArray);
    } else {
      const seatsArray = seatsDesc.filter(
        (s) => s !== getRowLetter(row) + getSeatNumber(seat),
      );
      setSeatsDesc(seatsArray);
    }
  };

  const selectedSeats = seats.flat().filter((seat) => seat).length;
  const availableSeats = seats.flat().filter((seat) => !seat).length;

  return (
    <div className="flex flex-col justify-center text-center p-6">
      <h1>Seats Selection</h1>
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
      <div>
        <p>
          Selected Seats: <strong>{selectedSeats}</strong>
        </p>
        <p>Available Seats: {availableSeats}</p>
        <p>
          Seat:{" "}
          {seatsDesc.map((s, i) => (
            <strong key={i}>{s} </strong>
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
