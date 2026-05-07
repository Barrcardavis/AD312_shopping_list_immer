# AD312 Shopping List (Immer)

A simple React application demonstrating state management with **Immer** by building an interactive shopping list. Users can add items, categorize them, include notes, adjust quantities, and delete entries — all powered by immutable state updates using Immer’s `produce()` function.

## Features
- Add new shopping list items with name, category, and notes
- Increase or decrease item quantity
- Delete items from the list
- Clean, responsive UI
- State updates handled with **Immer** for immutable logic

## Technologies Used
- React
- Immer
- Vite
- JavaScript (ES6+)
- CSS

## How to Run
1. Install dependencies:
   ```bash
   npm install

Start the development server:
   ```bash
npm run dev

Project Structure
src/
  ├── App.jsx
  ├── App.css
  ├── components/
  │     └── ShoppingListWithImmer.jsx
  └── main.jsx

## Test Cases

This project includes at least **3 normal test cases** and **3 edge test cases** to demonstrate correct behavior of the shopping list built with Immer. All test cases were manually demonstrated in the browser as required for AD312.

### Normal Test Cases

**1. Add a New Item**
- **Action:** Enter "Bread", Category "Bakery", Notes "Whole wheat", then click **Add Item**.
- **Expected:** A new item appears in the list with quantity **1** and the correct category/notes.

**2. Increase Quantity**
- **Action:** Click the **+** button on an existing item.
- **Expected:** Quantity increases by **1** each time.

**3. Decrease Quantity**
- **Action:** Click the **–** button on an item with quantity > 1.
- **Expected:** Quantity decreases by **1** and never goes below **1**.

---

### Edge Test Cases

**1. Delete an Item**
- **Action:** Click **Delete** on any item.
- **Expected:** The item is removed from the list immediately.

**2. Add Item With Empty Notes**
- **Action:** Enter an item name and category but leave Notes blank, then click **Add Item**.
- **Expected:** Item is added successfully with Notes shown as empty (or omitted depending on UI).

**3. Rapid Quantity Changes**
- **Action:** Click the **+** button 10–15 times quickly.
- **Expected:** Quantity updates smoothly with no errors, no lag, and no state corruption.

---

### Demonstration

All six test cases were performed live in the browser during the assignment video:

1. Normal test cases first  
2. Edge test cases second  
3. All behaviors passed as expected  





Purpose
This project was created for AD312 – Advanced JavaScript Frameworks to practice using Immer for clean, immutable state management inside React applications.
