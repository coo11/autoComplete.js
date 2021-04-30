/**
 * List Item element creator
 *
 * @param {String} itemValue - The item string value
 * @param {Number} resultIndex - The result item index
 * @param {Object} config - autoComplete configurations
 *
 * @return {Element} - The created result item element
 */
export default (data, index, config) => {
  // Create a DIV element for each matching result item
  const item = document.createElement(config.resultItem.element);
  item.setAttribute("id", `${config.resultItem.idName}_${index}`);
  item.setAttribute("class", config.resultItem.className);
  item.setAttribute("role", "option");
  item.innerHTML = data.match;
  // If custom content set pass params
  if (config.resultItem.content) config.resultItem.content(data, item);

  // Return the result item element
  return item;
};
