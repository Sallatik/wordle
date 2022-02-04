export const deleteOne = (array, element) => {
  const index = array.findIndex((e) => e === element);
  if (index !== -1) array.splice(index, 1);
};

export const modifyArrayElement = (array, index, f) =>
  array.map((element, i) => (i === index ? f(element) : element));

export const modifyMatrixElement = (matrix, row, column, f) =>
  modifyArrayElement(matrix, row, (array) =>
    modifyArrayElement(array, column, f)
  );
