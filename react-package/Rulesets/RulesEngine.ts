
export const parseLogicAndOr = (logicallyAndRules: boolean | null) => {
  if (logicallyAndRules === false) {
    return '\n\nand who are also:';
  }
  return '\n\nor aliens who are:';
};

export const processRules = (ruleset: string | null): string => {
  let retStr = '';
  if (ruleset) {
    retStr = "XYZ"
  } else retStr = 'None';
  return retStr;
};

export const process = (rulesets): string => {
  if (rulesets) {
    return 'None';
  }
  return `\r\nAliens are:${rulesets
    .join('\n\nand also Aliens who are:')}`;
};
