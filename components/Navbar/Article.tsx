import React, { FC } from 'react';

interface ArticleProps {
  label: string;
  color?: string;
}
const Article: FC<ArticleProps> = ({label, color}) => {
  return <h3 className="text-2xl font-semibold text-white">{label}</h3>;
};

export default Article;
