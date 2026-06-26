import { useState, useEffect } from "react";

function NotificationBell() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      document.title = "SaaS Dashboard";
    } else {
      document.title = `(${count}) SaaS Dashboard`;
    }
  }, [count]);

  return (
    <div>
      {count === 0 ? <p>No notifications</p> : <p>Notifications: {count}</p>}
      {count > 9 && <p>check your inbox</p>}
      <button onClick={() => setCount(count + 1)}>New Notification</button>
      <button onClick={() => setCount(0)}>Clear</button>
    </div>
  );
}

export default NotificationBell;
