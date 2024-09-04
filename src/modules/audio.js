//custom audio events - creates audio event
export function AudioEventFn (EventName){
    let audioEvent = new CustomEvent('AudioEvent', {
        detail: {
            type: EventName,
            message: `Success - execute ${EventName}`,
            status: 'success'
        }
    })
    return audioEvent;
};
