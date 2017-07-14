export default function printLongStackTrace(logger, e) {
  // Chrome recognizes strings of the following format as stack traces:
  // Error: blah
  // at blah (blah://)

  logger(e.stack.replace(/From previous event:\n/gm, 'at previous event (placeholder://):\n').trim());
}