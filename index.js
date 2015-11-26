/**
 * @func withClass
 * @desc get elements by .class
 * @param {string} className - name of class to match
 * @param {object} root=document - root element to start search from
 * @returns {array<object>} array of elements
 */
function withClass(className, root = document) {
  return Array.prototype.slice.call(root.getElementsByClassName(className))
}

/**
 * @func withTag
 * @desc get elements by <tag>
 * @param {string} tagName - name of tag to match
 * @param {object} root=document - root element to start search from
 * @returns {array<object>} array of elements
 */
function withTag(tagName, root = document) {
  return Array.prototype.slice.call(root.getElementsByTagName(tagName))
}

module.exports = {withClass, withTag}
