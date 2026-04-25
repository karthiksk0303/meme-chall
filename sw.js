self.addEventListener('fetch', (event) => {
    // When the browser asks for 'flag_status.txt', we send a fake response
    // that contains the REAL flag in the custom headers.
    if (event.request.url.includes('flag_status.txt')) {
        event.respondWith(
            new Response('Flag status: Encrypted at Rest', {
                headers: { 
                    'Content-Type': 'text/plain',
                    'X-Fahh-Secret-Flag': 'PSNACET{Y3p_bu66y_Th5_Is_FAHHHHH!}' 
                }
            })
        );
    }
});
