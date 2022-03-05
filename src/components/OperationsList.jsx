import React from "react"
import { Operation } from "./Operation"
export const OperationsList = ({operations, setEditOperation, deleteOperation}) => {
  return (
    <div className="m-4 p-4">
      <h2 className="block uppercase text-lg text-slate-400">Historial de Operaciones</h2>

      {operations.map( operation => (
        <Operation
          key = {operation.id}
          operation = {operation}
          setEditOperation = {setEditOperation}
          deleteOperation = {deleteOperation}
        />
      ))}
    </div>
  )
}
