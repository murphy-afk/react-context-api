import { createContext } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
  const BudgetValue = {
    test: 'works'
  }
  return (
    <BudgetContext.Provider value={BudgetValue}>
      {children}
    </BudgetContext.Provider>
  )
}

export { BudgetProvider, BudgetContext }