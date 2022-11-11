interface formatCurrencyProps {
  absolute?: boolean;
  skipSymbol?: boolean;
  skipFloat?: boolean;
  showPlusSign?: boolean;
  showMinusSign?: boolean;
}

export const formatCurrency = (
  value?: number | string,
  props?: formatCurrencyProps,
) => {
  if (value !== undefined) {
    const parsedNumber = props?.absolute
      ? Math.abs(Number(value))
      : Number(value);
    const symbol = props?.skipSymbol ? '' : 'R$';
    const plusSign = props?.showPlusSign ? '+ ' : '';
    const minusSign = props?.showMinusSign ? '- ' : '';
    return `${minusSign}${plusSign}${symbol}${parsedNumber.toFixed(
      props?.skipFloat ? 0 : 2,
    )}`;
  }

  return '';
};
