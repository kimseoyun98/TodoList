import { useEffect } from "react";
import { useToast } from "../hooks/useToast";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Toaster = () => {
  const { toasts, removeToast } = useToast();
  const [parent] = useAutoAnimate();

  useEffect(() => {
    if (toasts.length === 0) return;

    const targetToastId = toasts[0].id;

    const timer = setTimeout(() => {
      removeToast(targetToastId);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [toasts, removeToast]);

  return (
    <section className="fixed z-20 right-4 bottom-24">
      <ul ref={parent} className="flex flex-col gap-4">
        {toasts.map((toast) => {
          return (
            <li key={toast.id} className="bg-white p-4 rounded-lg shadow-md">
              <p> {toast.content}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Toaster;
