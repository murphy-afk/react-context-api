import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);
  const budgetValue = {
    test: 'works',
    budgetMode,
    setBudgetMode
  }
  return (
    <BudgetContext.Provider value={budgetValue}>
      {children}
    </BudgetContext.Provider>
  )
}

function useBudgetMode() {
  const value = useContext(BudgetContext);
  return value
}

export { BudgetProvider, useBudgetMode }