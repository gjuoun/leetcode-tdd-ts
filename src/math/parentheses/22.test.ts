function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  const addingPair = (open: number, close: number, str: string): void => {
    if (open === 0 && close === 0) {
      result.push(str);
      return;
    }

    if (open > 0) {
      addingPair(open - 1, close, str + "(");
    }

    if (close > open) {
      str; //?
      addingPair(open, close - 1, str + ")");
    }
  };

  addingPair(n, n, "");

  return result;
}

function generateParenthesisV2(n: number): string[] {
  const result: string[] = [];

  const addingPairV2 = (
    open: number,
    close: number,
    max: number,
    str: string,
    list: string[]
  ): void => {
    if (str.length === max * 2) {
      list.push(str);
      return;
    }

    if (open < max) {
      addingPairV2(open + 1, close, max, str + "(", list);
    }

    if (close < open) {
      addingPairV2(open, close + 1, max, str + ")", list);
    }
  };
  addingPairV2(0, 0, n, "", result);

  return result;
}

generateParenthesisV2(3); //?
