import React, { useRef, useEffect } from 'react';

const IframeRenderer: React.FC<{ htmlContent: string }> = ({ htmlContent }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (iframeRef.current) {
            const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
            if (iframeDoc) {
                iframeDoc.open();
                iframeDoc.write(htmlContent);
                iframeDoc.close(); // Close the document to apply the changes
            }
        }
    }, [htmlContent]); // Run effect when htmlContent changes

    return (
        <iframe
            ref={iframeRef}
            style={{ width: '100%', height: '400px', border: 'none' }}
            title="HTML Renderer"
        />
    );
};

export default IframeRenderer;
