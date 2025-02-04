(function() {
    console.log('Test!');
    
    const button = document.getElementById('post-btn');

    button.addEventListener('click', async _ => {
        console.log('Inside!');
        const settings = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            'Authorization': 'Bearer pat-na1-be681d2e-e7d8-4cb9-8f5c-47783a93c1ba',
        },
        body: {
            "properties": {
                "email": "testuseremail@gmail.com",
                "firstname": "John",
                "lastname": "Smith"
            }
        }
        };
        
        try {
            console.log('Here!');
            const fetchResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, settings);
            const data = await fetchResponse.json();
            console.log(data);
            console.log('End!');
            return data;
            } catch (e) {
                console.log(e);
                return e;
            }    
    });
    
})();
