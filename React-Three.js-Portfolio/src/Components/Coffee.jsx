import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

// Styled container for the iframe
const CoffeeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 88vh;
  padding-right: 40px;
`;

const Coffee = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const iframe = document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '300px'; 
      iframe.style.height = '150px';
      containerRef.current.appendChild(iframe);

      const iframeDoc = iframe.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(`
        <script src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" 
                data-name="bmc-button" 
                data-slug="Abbate11" 
                data-color="#ffffff" 
                data-emoji="" 
                data-font="Cookie" 
                data-text="Buy me a coffee" 
                data-outline-color="#000000" 
                data-font-color="#000000" 
                data-coffee-color="#FFDD00">
        </script>
      `);
      iframeDoc.close();

      const applyStyles = () => {

        const button = iframeDoc.querySelector('.bmc-btn');
        if (button) {
          button.style.boxShadow = `1px 1px 1px #919191,
            1px 2px 1px #919191,
            1px 3px 1px #919191,
            1px 4px 1px #919191,
            1px 18px 6px rgba(16, 16, 16, 0.4),
            1px 22px 10px rgba(16, 16, 16, 0.2),
            1px 25px 35px rgba(16, 16, 16, 0.2),
            1px 30px 60px rgba(16, 16, 16, 0.4)`;
        } else {
          // Try again after a short delay if the button is not found
          setTimeout(applyStyles, 100);
        }
      };

      // Wait for the button to be rendered and then apply styles
      setTimeout(applyStyles, 1000); // Adjust the delay if needed

      return () => {
        containerRef.current.removeChild(iframe);
      };
    }
  }, []);

  return <CoffeeContainer ref={containerRef}></CoffeeContainer>;
}

export default Coffee;


