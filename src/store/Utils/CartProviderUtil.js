export const getUpdateItemsArray = (stateItemsArray, item) => {
  // Clone an array.
  let updatedItemsArray = stateItemsArray.concat([]);

  // Check if the item is already present in the array or not.
  const existingItemIndex = updatedItemsArray.findIndex(
    (i) => i.id === item.id
  );

  // If item is already present update the quantity.
  if (existingItemIndex >= 0) {
    updatedItemsArray[existingItemIndex] = {
      ...updatedItemsArray[existingItemIndex],
      quantity: updatedItemsArray[existingItemIndex].quantity + item.quantity,
    };
  }
  // else add the item in the items array.
  else {
    updatedItemsArray = updatedItemsArray.concat(item);
  }

  // Returns updated item array.
  return updatedItemsArray;
};
