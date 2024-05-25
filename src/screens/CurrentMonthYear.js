// CurrentMonthYear.js
import React from 'react';
import { Text } from 'react-native';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const CurrentMonthYear = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'LLLL yyyy', { locale: ru });

  return (
    <Text>{formattedDate}</Text>
  );
};

export default CurrentMonthYear;
