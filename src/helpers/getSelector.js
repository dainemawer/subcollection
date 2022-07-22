/**
 * Get Largest Layout Shift Entry
 *
 * @since 1.0.0
 * @param {object} node The object to iterate over.
 * @param {number} maxLen the max length of the string
 * @returns {Array} Returns the picked values.
 *
 */

export function getSelector(node, maxLen = 100) {
	let sel = '';
	try {
		while (node && node.nodeType !== 9) {
			const part = node.id
				? `#${node.id}`
				: node.nodeName.toLowerCase() +
				  (node.className && node.className.length
						? `.${Array.from(node.classList.values()).join('.')}`
						: '');
			if (sel.length + part.length > maxLen - 1) {
				return sel || part;
			}
			sel = sel ? `${part} > ${sel}` : part;
			if (node.id) {
				break;
			}
			node = node.parentNode; // eslint-disable-line no-param-reassign
		}
	} catch (err) {
		// Do nothing...
	}
	return sel;
}
