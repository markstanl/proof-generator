import React, { useRef, useEffect } from 'react';

const IframeRenderer: React.FC<{ htmlContent: string }> = ({ htmlContent }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (iframeRef.current) {
            const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
            if (iframeDoc) {
                iframeDoc.open();
                iframeDoc.write(htmlContent);
                iframeDoc.close();
            }
        }
    }, [htmlContent]);

    return (
        <iframe
            ref={iframeRef}
            style={{ width: '100%', height: '100vh', border: 'none', marginTop: '4rem' }}
            title="HTML Renderer"
        />
    );
};

export default IframeRenderer;
