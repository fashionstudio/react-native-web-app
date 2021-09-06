import { createContext } from "react";
import { IAppProps } from "../types";
import { defaultProps } from "./default";

export interface IStructureContext extends Required<IAppProps>{

}

export const StructureContext = createContext<IStructureContext>(defaultProps);
