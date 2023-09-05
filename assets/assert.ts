export function assert (value: boolean, msg: string) {
    if (!value) {
        console.error(msg);
    }
}