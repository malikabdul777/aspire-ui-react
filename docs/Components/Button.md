import Button from '@site/src/components/Button/Button.jsx';

### Preview

<div className="centerContent previewBox">
<Button>Click me</Button>
</div>

&nbsp;

### Component Code

```jsx title="ButtonComponent.jsx"
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick = () => {},
  style = {},
  className = "",
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`${styles.customButton} ${className}`}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

```css title="ButtonComponent.css"
/* Basic styles for the button */
.customButton {
  font-size: 16px;
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s, transform 0.2s;
}

/* Hover state */
.customButton:hover {
  background-color: #0056b3;
}

/* Active state */
.customButton:active {
  transform: scale(0.98);
}

/* Disabled state */
.customButton:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
```

### Explanation

1.  **Button Component**:

    The `Button` component is a functional component that takes following props for customization.

    - `children`: The content inside the button.
    - `onClick`: Function to handle the button click event (defaults to an empty function).
    - `style`: Inline styles for the button (defaults to an empty object).
    - `className`: CSS class names for styling the button (defaults to an empty string).
    - `disabled`: Boolean to disable the button (defaults to `false`).
    - `type`: Button type attribute (`button`, `submit`, or `reset`; defaults to `button`).
    - `...props`: Spread operator to pass any additional props to the button element.

This component provides default values directly within the function parameter destructuring, ensuring that the component behaves correctly even if some props are not provided. Users can now copy and paste this code into their projects and customize the button component as needed.

Here's how you might use this component in a parent component:

### Example Usage

```jsx title="parentComponent.jsx"
import Button from "./ButtonComponent";
import styles from "./styles.module.css";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <Button onClick={handleClick} className={styles.yourStyling}>
        Click Me
      </Button>
    </div>
  );
};

export default App;
```

### Customization

- **CSS Classes**: You can create additional CSS classes and pass them via the `className` prop to customize the button's appearance further.
- **Inline Styles**: Use the `style` prop to apply inline styles for dynamic styling needs.

You can copy and paste the `ButtonComponent.jsx` and `ButtonComponent.css` files into your projects, customize the CSS as needed, and use the button component with full flexibility.
