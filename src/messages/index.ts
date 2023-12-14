import messages from "./templates/messages.json";

enum ETemplates {
  messages = "messages",
}

const templates = {
  messages,
};

export type IFunctionMessage = (value: string) => string;

/**
 *
 * @param {string} value value to pass, it is the path of the text in the json file
 * @returns {string} return the string matched with the path passed
 */
export const message: IFunctionMessage = (value: string): string => {
  const paths: any = value.split(".");

  if (!ETemplates[paths[0] as ETemplates]) return "";

  const message = paths.reduce(
    (template: any, key: number) => template[key],
    templates
  ) as unknown as string;

  return message ?? "";
};
