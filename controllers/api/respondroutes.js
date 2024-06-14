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
        response = "hey, sorry for the delay. still waiting on my wife. i'm still interested though... is the price flexible?";
    }
    else if((/(flexible|flex)/i).test(receivedMessage)) {
            response = "Unfortunately, the boss says it's a no go for me. Thanks for your time.";
    } 
    else if((/(let me know|interested)/i).test(receivedMessage)) {
        response = "im still interested, just waiting on my wife's approval. are you felxible with the price??"
    }
    else if((/(lowball|low ball|scam|rip me off)/i).test(receivedMessage)) {
        response = "sorry! im not trying to lowball you, just tring to see if you give me a decent deal. i'm just that interested! are you flexible with the price??"
    }
    else if((/(jerk|screw|chump)/i).test(receivedMessage)) {
        response = "Woe DUDE! YOU HAVE NO IDEA WHO YOU'RE SCREWING WITH! BETTER SLEEP WITH ONE EYE OPEN!!!";
    } 

   

    res.json({
        message: response
    })
});


module.exports = router;


