import { FC } from "react";

interface ConditionalProps {
  condition: boolean | undefined;
  trueRender: React.ReactElement;
  falseRender?: React.ReactElement | null;
}

export const Conditional: FC<ConditionalProps> = ({ condition, trueRender, falseRender = null }) => {
  if (condition) return trueRender;

  return falseRender;
};
