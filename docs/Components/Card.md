import Card from '@site/src/components/Card/Card.jsx';

### Preview

<div className="centerContent previewBox">

<Card className="fullWidth ">
  <h1>Card Title</h1>
  <p>Card content goes here.</p>
</Card> <Card className="fullWidth ">
  <h1>Card Title</h1>
  <p>Card content goes here.</p>
</Card>
</div>
&nbsp;

### Component Code

```jsx title="CardComponent.jsx"
import styles from "./CardComponent.module.css";

const Card = ({ children, style = {}, className = "", ...props }) => {
  return (
    <div
      style={style}
      className={`${styles.customCard} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
```

```css title="CardComponent.css"
/* Basic styles for the card */
.customCard {
  background-color: #ffffff; /* Light background for contrast in dark mode */
  color: #000000; /* Dark text for readability */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  padding: 20px;
  transition: box-shadow 0.3s, transform 0.2s;
}

/* Hover state */
.customCard:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

/* Active state */
.customCard:active {
  transform: scale(0.98);
}
```

### Explanation

1.  **Card Component**:
    - `children`: The content inside the card.
    - `style`: Inline styles for the card (defaults to an empty object).
    - `className`: CSS class names for styling the card (defaults to an empty string).
    - `...props`: Spread operator to pass any additional props to the card element.

This component provides default values directly within the function parameter destructuring, ensuring that the component behaves correctly even if some props are not provided. Users can now copy and paste this code into their projects and customize the card component as needed.

Here's how you might use this component in a parent component:

### Example Usage

```jsx title="parentComponent.jsx"
import Card from "./CardComponent";
import styles from "./styles.module.css";

const App = () => {
  return (
    <div>
      <Card className={styles.yourStyling}>
        <h1>Card Title</h1>
        <p>Card content goes here.</p>
      </Card>
    </div>
  );
};

export default App;
```

### Customization

- **CSS Classes**: You can create additional CSS classes and pass them via the `className` prop to customize the card's appearance further.
- **Inline Styles**: Use the `style` prop to apply inline styles for dynamic styling needs.

You can copy and paste the `CardComponent.jsx` and `CardComponent.module.css` files into your projects, customize the CSS as needed, and use the card component with full flexibility.
