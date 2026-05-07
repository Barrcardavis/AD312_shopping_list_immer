import "./App.css";
import { useImmer } from "use-immer";
import { useState } from "react";

export default function ShoppingListWithImmer() {
  // Section 2: State Initialization
  const [shoppingList, updateShoppingList] = useImmer([
    {
      id: 1,
      name: "Milk",
      quantity: 1,
      details: {
        category: "Dairy",
        notes: "Whole milk"
      }
    },
    {
      id: 2,
      name: "Bread",
      quantity: 2,
      details: {
        category: "Bakery",
        notes: "Whole wheat"
      }
    }
  ]);

  // Local form state
  const [newName, setNewName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newNotes, setNewNotes] = useState("");

  // Section 3: State Update Functions
  function addItem(newItem) {
    updateShoppingList(draft => {
      draft.push(newItem);
    });
  }

  function updateItem(id, updatedFields) {
    updateShoppingList(draft => {
      const item = draft.find(i => i.id === id);
      if (item) {
        Object.assign(item, updatedFields);
      }
    });
  }

  function removeItem(id) {
    updateShoppingList(draft => {
      const index = draft.findIndex(i => i.id === id);
      if (index !== -1) {
        draft.splice(index, 1);
      }
    });
  }

  // Section 4: UI Rendering
  function handleAdd() {
    if (!newName.trim()) return;

    const newItem = {
      id: Date.now(),
      name: newName,
      quantity: 1,
      details: {
        category: newCategory || "Uncategorized",
        notes: newNotes || ""
      }
    };

    addItem(newItem);
    setNewName("");
    setNewCategory("");
    setNewNotes("");
  }

  return (
    <div className="app-container">
      <h1>Shopping List (Immer)</h1>

      {/* Add Item Form */}
      <div className="add-form">
        <input
          placeholder="Item name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <input
          placeholder="Category"
          value={newCategory}
          onChange={e => setNewCategory(e.target.value)}
        />
        <input
          placeholder="Notes"
          value={newNotes}
          onChange={e => setNewNotes(e.target.value)}
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>

      {/* Render List */}
      <ul>
        {shoppingList.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> — Qty: {item.quantity}
            <br />
            <em>{item.details.category}</em> | {item.details.notes}
            <br />
            <button
              onClick={() =>
                updateItem(item.id, { quantity: item.quantity + 1 })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                updateItem(item.id, {
                  quantity: Math.max(1, item.quantity - 1)
                })
              }
            >
              -
            </button>
            <button
              onClick={() => removeItem(item.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
