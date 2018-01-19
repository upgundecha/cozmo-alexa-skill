# Custom Alexa Skill for Cozmo

## Intent Schema

```
{
    "intents":[
        {
            "intent":"MoveForward"
        },
        {
            "intent":"MoveBackward"
        },
        {
            "intent":"RaiseHand"
        },
        {
            "intent":"DropHand"
        }
    ]
}
```
## Utterances
```
MoveForward to move forward
MoveForward to come forward
MoveForward move forward
MoveForward come forward

MoveBackward to move backward
MoveBackward to move back
MoveBackward to go back
MoveBackward move backward
MoveBackward move back
MoveBackward go back

RaiseHand raise your hands
RaiseHand raise hands
RaiseHand to raise hands

DropHand drop hands
DropHand to drop hands
```

## Lambda Configuration

1. Name - CozmoAlexaSkill
2. Trigger - Alexa Skill Kit
3. Upload the code archive
4. Add COZMO_HOST environment variable with Host/IP running Cozmo
5. Execution Role > Create new role from template(s) > role_name > Simple Microservices permissions


## Cozmo Program

You can find Cozmo script for this integration [here](https://github.com/upgundecha/cozmo-python-sdk/blob/master/examples/if_this_then_that/alexa.py)

