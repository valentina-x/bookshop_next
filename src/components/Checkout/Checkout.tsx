import React, { useEffect } from "react";
import Link from "next/link";
import { clearCart } from "@/pages/lib/features/cartSlice";
import { useAppDispatch } from "@/pages/lib/hooks/hooks";

export default function Checkout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Thanks for your order!</h1>
      <div style={{ width: "100%" }}>
        Your order is being processed! <Link href="/">Return to store</Link>
      </div>
    </div>
  );
}
