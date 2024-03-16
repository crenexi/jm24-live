/* eslint @typescript-eslint/no-explicit-any:0 */

export type Msg = string | unknown;
export type MsgData = { msg: Msg; src?: string };

export type CreateMessageFn = (level: string, inputs: MsgData) => void;
export type MessageFn = (msg: Msg, src?: string) => void;
export type ConsoleGroupFn = (
  groupTitle?: any,
  ...optionalParams: any[]
) => void;
export type GroupCollapsedFn = (
  groupTitle?: any,
  ...optionalParams: any[]
) => void;

export type Logger = {
  error: MessageFn;
  warn: MessageFn;
  info: MessageFn;
  debug: MessageFn;
  trace: MessageFn;
  log: MessageFn;
  dir: MessageFn;
  table: MessageFn;
  group: ConsoleGroupFn;
  groupCollapsed: GroupCollapsedFn;
  groupEnd: () => void;
};
