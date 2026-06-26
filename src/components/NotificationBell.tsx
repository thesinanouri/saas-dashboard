import { useState, useEffect } from "react";

function NotificationBell() {
  const [count, setCount] = useState(0);

  const visible = count > 0;

  useEffect(() => {
    if (count === 0) {
      document.title = "SaaS Dashboard";
    } else {
      document.title = `(${count}) SaaS Dashboard`;
    }
  }, [count]);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
      <h2 className="text-3xl font-bold mb-4">Notifications</h2>

      {count === 0 ? (
        <p className="text-gray-500">No new notifications</p>
      ) : (
        <p className="text-white font-semibold">Notification: {count}</p>
      )}

      <p
        className={`text-yellow-400 text-sm mt-2 transition-all duration-300 ease-in-out overflow-hidden ${visible ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}`}
      >
        Check your inbox.
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => setCount(count + 1)}
          className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          New Notification
        </button>
        <button
          onClick={() => setCount(0)}
          className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Clear Notification{count > 1 ? "s" : ""}
        </button>
      </div>
    </div>
  );
}

export default NotificationBell;
