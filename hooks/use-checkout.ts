import { toast } from "sonner";

const mockApiCall = (): Promise<{ orderId: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = true; 
      if (isSuccess) {
        resolve({ orderId: "ORD-9982" });
      } else {
        reject(new Error("Failed to process payment"));
      }
    }, 1500);
  });
};
export function useCheckout() {

 const submitOrder = () => {
    toast.promise(mockApiCall(), {
      loading: "Processing your workspace setup order...",
      success: (data) => `Order confirmed! Reference: ${data.orderId}`,
      error: (err: Error) => err.message || "Failed to place order. Please try again.",
    });
  };

  return {  submitOrder };
}