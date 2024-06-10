import React from 'react';

interface DateProps {
  timestamp: string;
}

const FormattedDate: React.FC<DateProps> = ({ timestamp }) => {
  const date = new Date(timestamp);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return <div className="text-sm text-muted-foreground">Даты нет</div>;
  }

  // Formatting the date as 'Month Day, Year'
  const formattedDate = date.toLocaleDateString('ru-RU', {
    year: "numeric",
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="text-sm text-muted-foreground ">
      {formattedDate}
    </div>
  );
};

export default FormattedDate;
