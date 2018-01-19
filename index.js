var request = require('request');

exports.handler = (event, context, callback) => {
  try {
    switch (event.request.type) {
      case "LaunchRequest":
        buildResponse("Welcome to Unmesh's Cozmo")
        break;
      case "IntentRequest":
        switch(event.request.intent.name){
          case "MoveForward":
            moveForward(function(){
              context.succeed(buildResponse(`Cozmo is moving forward`))
            })
            break;
          case "MoveBackward":
            moveBackward(function(){
              context.succeed(buildResponse(`Cozmo is moving back`))
            })
            break;
          case "RaiseHands":
            raiseHands(function(){
              context.succeed(buildResponse(`Cozmo is raising hands`))
            })
            break;
          case "DropHands":
            dropHands(function(){
              context.succeed(buildResponse(`Cozmo is dropping hands`))
            })
            break;
          default:
          context.succeed(buildResponse("Sorry I couldn't understand"))
        }
        break;
      case "SessionEndedRequest":
        break;
      default:
        context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)
    }
  } catch(error) { context.fail(`Exception: ${error}`) }
}

moveForward= (callback) =>{
  var options = {
    url: `${process.env.COZMO_HOST}/moveForward/`,
    headers: {
      'User-Agent': 'cozmo-alexa-skill'
    }
  };
  request(options, function(error, response, body){
    callback(data.followers)
  })
}

moveBackward= (callback) =>{
  var options = {
    url: `${process.env.COZMO_HOST}/moveBackward/`,
    headers: {
      'User-Agent': 'cozmo-alexa-skill'
    }
  };
  request(options, function(error, response, body){
    callback()
  })
}

raiseHand = (callback) =>{
  var options = {
    url: `${process.env.COZMO_HOST}/raiseHand/`,
    headers: {
      'User-Agent': 'cozmo-alexa-skill'
    }
  };
  request(options, function(error, response, body){
    callback()
  })
}

dropHand = (callback) =>{
  var options = {
    url: `${process.env.COZMO_HOST}/dropHand/`,
    headers: {
      'User-Agent': 'cozmo-alexa-skill'
    }
  };
  request(options, function(error, response, body){
    callback()
  })
}

buildResponse = (outputText) => {
  return {
    version: "1.0",
    sessionAttributes: {},
    response: {
      outputSpeech: {
        type: "PlainText",
        text: outputText
      }
    },
      shouldEndSession: true
  }
}