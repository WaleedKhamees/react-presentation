import { useReducer } from "react";
import { Btn } from "../Components/Btn";
import { CodeBlock } from "../Components/CodeBlock";

export const UseReducerCode = () => (
  <CodeBlock fileName="UseReducer.tsx">{`const InitialState = {
    number: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { number: state.number + 1 };
      case "decrement":
        return { number: state.number - 1 };
      default:
        throw new Error("Invalid Action Type");
    }
  };

  const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, InitialState);
    return (
      <div>
        <h2>{state.number}</h2>
        <div>
          <button onClick={() => dispatch({type:"Increment"})}>+</button>
          <button onClick={() => dispatch({type: "decrement"})}>-</button>
        </div>
      </div>
    );
  };`}</CodeBlock>
);
export const ComplexUseReducerCode = () => {
  return (
    <CodeBlock fileName="ShoppingCart useReducer" full>
      {`import { useReducer } from 'react';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity
            };
          }
          return item;
        })
      };
    default:
      throw new Error('Invalid action');
  }
};

function ShoppingCart() {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: []
  });

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const updateQuantityInCart = (item, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartState.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} - \${item.price}
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
            <input type="number" value={item.quantity} onChange={(e) => updateQuantityInCart(item, e.target.value)} />
          </li>
        ))}
      </ul>
      <button onClick={() => addItemToCart({ id: 1, name: 'Item 1', price: 10.99, quantity: 1 })}>Add Item 1</button>
      <button onClick={() => addItemToCart({ id: 2, name: 'Item 2', price: 5.99, quantity: 1 })}>Add Item 2</button>
    </div>
  );
}
`}
    </CodeBlock>
  );
};

const InitialState = {
  number: 0,
};
type ActionType = { type: "Increment" } | { type: "decrement" };

const reducer = (
  state: typeof InitialState,
  action: ActionType
): typeof InitialState => {
  switch (action.type) {
    case "Increment":
      return { number: state.number + 1 };
    case "decrement":
      return { number: state.number - 1 };
    default:
      throw new Error("Invalid Action Type");
  }
};
export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="h2">UseReducer Example</h2>
      <h2 className="h2">{state.number}</h2>
      <div className="flex gap-4">
        <Btn rectangle onClick={() => dispatch({ type: "Increment" })}>
          {" + "}
        </Btn>
        <Btn rectangle onClick={() => dispatch({ type: "decrement" })}>
          {" - "}
        </Btn>
      </div>
    </div>
  );
};
