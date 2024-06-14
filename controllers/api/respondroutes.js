const router = require('express').Router();

router.post("/", (req, res) => {
    const receivedMessage = req.body.message;

    console.log(receivedMessage);

    let response = "I'm on the other line. I'll get back to you";

    if((/(cash|venmo|either|both)/i).test(receivedMessage)) {
        response = "Great that works! I'm very intertersted! When are you usually available? morning or afternoon?";
    } 
    else if((/(morning|afternoon|after|before)/i).test(receivedMessage)) {
        response = "I could make that work... but let me check with the wife first. Then I'll get back to you."
    } 
    else if((/(soon|later)/i).test(receivedMessage)) {
        response = "Great! I'll be in touch."
    }
    else if((/(hello|hi|hey)/i).test(receivedMessage)) {
        response = "hey, sorry for the delay. still waiting on my wife. i'm still interested though...";
    }
    else if((/(flexible|flex)/i).test(receivedMessage)) {
            response = "Unfortunately, the boss says it's a no go for me. Thanks for your time.";
    } 
    else if((/(let me know|interested)/i).test(receivedMessage)) {
        response = "im still interested, just waiting on my wife's approval. are you felxible with the price??"
    }
   

    res.json({
        message: response
    })
});


module.exports = router;


// // Define your API key
// const apiKey = 'sk-proj-ZMkVnIQAhXQtPgtPomDAT3BlbkFJ6AdoXRjrxyaighD6yWWU';

// async function example() {
//     // To use ESM in CommonJS, you can use a dynamic import like this:
//     const { ChatGPTAPI } = await import('chatgpt')
//     // You can also try dynamic importing like this:
//     // const importDynamic = new Function('modulePath', 'return import(modulePath)')
//     // const { ChatGPTAPI } = await importDynamic('chatgpt')
  
//     // const api = new ChatGPTUnofficialProxyAPI({
//     //     accessToken: process.env.OPENAI_ACCESS_TOKEN
//     //   })
    
//     //   const res = await api.sendMessage('Hello World!')
//     //   console.log(res.text)

//     const api = new ChatGPTAPI({ apiKey: apiKey})

//     const res = await api.sendMessage('Hello World!')
//     console.log(res.text)
//   }

//   example();