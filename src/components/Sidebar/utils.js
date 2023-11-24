import React from 'react';
import Home from '../../assets/menu/home.png';
import Income from '../../assets/menu/income.png';
import Expense from '../../assets/menu/expense.png';
import Goal from '../../assets/menu/goal.png';
import Calculator from '../../assets/menu/calculator.png';
import Tax from '../../assets/menu/tax.png';
import Setting from '../../assets/menu/setting.png';

const getImage = ({ src }) => {
  switch (src) {
    case 'home':
      return Home;
    case 'income':
      return Income;
    case 'expense':
      return Expense;
    case 'goal':
      return Goal;
    case 'calculator':
      return Calculator;
    case 'tax':
      return Tax;
    default:
      return Setting;
  }
};

export const renderImage = ({ className, src, alt }) => {
  return <img src={getImage({ src })} alt={alt} className={className}></img>;
};
