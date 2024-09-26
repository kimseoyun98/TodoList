import { useEffect } from "react";
import { useToast } from "../hooks/useToast";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { CheckCircleIcon, InfoIcon, XCircleIcon } from "lucide-react";

const Toaster = () => {
  const { toasts, removeToast } = useToast();
  const [parent] = useAutoAnimate();

  useEffect(() => {
    if (toasts.length === 0) return;

    const targetToastId = toasts[0].id;

    const timer = setTimeout(() => {
      removeToast(targetToastId);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [toasts, removeToast]);

  return (
    <section className="fixed z-20 right-4 bottom-24 min-w-50 top-4">
      <ul ref={parent} className="flex flex-col gap-4 h-full justify-end">
        {toasts.map((toast) => {
          let icon;
          if (toast.type === "success") {
            icon = <CheckCircleIcon className="w-6 h-6 text-green-500" />;
          } else if (toast.type === "error") {
            icon = <XCircleIcon className="w-6 h-6 text-red-500" />;
          } else if (toast.type === "info") {
            icon = <InfoIcon className="w-6 h-6 text-blue-500" />;
          }
          return (
            <li
              key={toast.id}
              className="bg-white p-4 rounded-lg shadow-md w-full flex items-center overflow-hidden"
            >
              <div className="flex items-center whitespace-nowrap">
                {icon && <div className="mr-2">{icon}</div>}
                <p> {toast.content}</p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                <XCircleIcon className="w-5 h-5" />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Toaster;
