
## Scenario:  
We want to update the scroll position in a React component **without updating on every pixel movement**, which can cause performance issues.

We'll **throttle** the scroll event handler so that updates happen only once every 500ms.

---

## Code: `ScrollTracker.js`

```jsx
import React, { useEffect, useState } from 'react';

const throttle = (func, delay) => {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, delay);
    }
  };
};

const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollY(window.scrollY);
      console.log('Scroll Y:', window.scrollY);
    }, 500); // update every 500ms

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '2000px', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Scroll Down</h2>
      <div
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          backgroundColor: 'lightyellow',
          padding: '10px',
          border: '1px solid #ccc',
        }}
      >
        Scroll Y: {scrollY}px
      </div>
    </div>
  );
};

export default ScrollTracker;
```

---

## ✅ How It Works:

### 🔧 `throttle()` function:
- Limits execution of the scroll handler to **once every 500ms**.
- Prevents performance bottlenecks on continuous scroll.

### 📦 `useEffect()`:
- Attaches the throttled scroll listener when the component mounts.
- Removes the listener when the component unmounts (clean up).

### 🔁 `setScrollY(window.scrollY)`:
- Updates scroll Y position in the state **only once every 500ms** due to throttling.

---

## ✅ Output:
- You scroll the page.
- The fixed box shows the Y scroll position.
- It updates **only once per 500ms** instead of continuously.
- You avoid unnecessary re-renders and keep performance high.

---
