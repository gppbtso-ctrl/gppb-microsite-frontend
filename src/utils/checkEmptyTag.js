const isNonEmptyPTag = (htmlContent) => {
    // Create a DOMParser instance
    const parser = new DOMParser();
    
    // Parse the HTML content
    const doc = parser.parseFromString(htmlContent, 'text/html');
    
    // Get all <p> elements
    const pTags = doc.querySelectorAll('p');
    
    // Check if any <p> tag contains non-empty content
    for (const p of pTags) {
      // Check if <p> tag has any non-whitespace content including nested elements
      if (p.textContent.trim() !== '') {
        return true; // There is at least one non-empty <p> tag
      }
    }
    
    return false; // All <p> tags are empty
  };
export default isNonEmptyPTag;